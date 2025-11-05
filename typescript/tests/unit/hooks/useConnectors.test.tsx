import { renderHook, act } from '@testing-library/react';
import { useConnectors } from '../../../hooks/useConnectors';
import { connectorsStore } from '../../../state/connectors-store';
import { clearAllConnections } from '../../../storage/connectors/userConnections';

describe('useConnectors', () => {
  beforeEach(() => {
    clearAllConnections();
  });

  it('should return stable reference when state unchanged', () => {
    const { result, rerender } = renderHook(() => useConnectors());

    const firstResult = result.current;
    rerender();
    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it('should update when connector state changes', () => {
    const { result } = renderHook(() => useConnectors());

    const initialConnectedCount = result.current.connectedCount;
    expect(initialConnectedCount).toBe(0);

    act(() => {
      connectorsStore.connect('example');
    });

    expect(result.current.connectedCount).toBe(1);
    expect(result.current.isConnected('example')).toBe(true);
  });

  it('should provide connect function', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example');
    });

    expect(result.current.connectedCount).toBe(1);
    expect(result.current.isConnected('example')).toBe(true);
  });

  it('should provide disconnect function', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example');
    });

    expect(result.current.isConnected('example')).toBe(true);

    act(() => {
      result.current.disconnect('example');
    });

    expect(result.current.isConnected('example')).toBe(false);
  });

  it('should provide getState function', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example', 'test-key');
    });

    const state = result.current.getState('example');
    expect(state).toBeDefined();
    expect(state?.status).toBe('connected');
    expect(state?.apiKey).toBe('test-key');
  });

  it('should return all available connectors', () => {
    const { result } = renderHook(() => useConnectors());

    expect(result.current.allConnectors).toBeDefined();
    expect(Array.isArray(result.current.allConnectors)).toBe(true);
  });

  it('should maintain stable callback references', () => {
    const { result, rerender } = renderHook(() => useConnectors());

    const firstConnect = result.current.connect;
    const firstDisconnect = result.current.disconnect;

    rerender();

    expect(result.current.connect).toBe(firstConnect);
    expect(result.current.disconnect).toBe(firstDisconnect);
  });
});
