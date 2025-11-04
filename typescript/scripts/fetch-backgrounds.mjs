#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    clientId: null,
    count: 30,
    query: 'nature',
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--client-id' && i + 1 < args.length) {
      config.clientId = args[i + 1];
      i++;
    } else if (arg === '--count' && i + 1 < args.length) {
      config.count = parseInt(args[i + 1], 10);
      i++;
    } else if (arg === '--query' && i + 1 < args.length) {
      config.query = args[i + 1];
      i++;
    }
  }

  if (!config.clientId) {
    console.error('Error: --client-id is required');
    console.error(
      'Usage: node fetch-backgrounds.mjs --client-id YOUR_CLIENT_ID [--count 30] [--query nature]',
    );
    process.exit(1);
  }

  return config;
}

async function fetchBackgrounds(clientId, count, query) {
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&topics=nature&orientation=landscape&count=${count}`;

  console.log(`Fetching ${count} background images from Unsplash...`);
  console.log(`Query: ${query}`);

  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Unsplash API request failed: ${response.status} ${response.statusText}\n${errorText}`,
    );
  }

  const data = await response.json();
  return data;
}

function transformToBackgroundImages(unsplashPhotos) {
  const seen = new Set();
  const backgrounds = [];

  for (const photo of unsplashPhotos) {
    if (seen.has(photo.id)) {
      console.warn(`Skipping duplicate photo ID: ${photo.id}`);
      continue;
    }

    seen.add(photo.id);

    backgrounds.push({
      hotlink: photo.urls?.raw || '',
      sourceUrl: photo.links?.html || '',
      description:
        photo.alt_description ||
        photo.description ||
        'Nature landscape photo',
      id: photo.id,
    });
  }

  return backgrounds;
}

async function main() {
  const config = parseArgs();

  try {
    const unsplashPhotos = await fetchBackgrounds(
      config.clientId,
      config.count,
      config.query,
    );

    const backgrounds = transformToBackgroundImages(unsplashPhotos);

    console.log(`Successfully fetched ${backgrounds.length} backgrounds`);

    const outputPath = join(__dirname, '..', '..', 'public', 'backgrounds.json');
    const jsonContent = JSON.stringify(backgrounds, null, 2);

    writeFileSync(outputPath, jsonContent, 'utf-8');
    console.log(`Written to: ${outputPath}`);

    console.log('\nRemember to attribute Unsplash photographers:');
    console.log(
      'All background attribution links include ?utm_source=flowhub&utm_medium=referral',
    );
  } catch (error) {
    console.error('Error fetching backgrounds:', error.message);
    process.exit(1);
  }
}

main();
