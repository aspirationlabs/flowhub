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

    expect(result.current.isConnectorConnected('example')).toBe(false);

    act(() => {
      connectorsStore.connect('example');
    });

    expect(result.current.isConnectorConnected('example')).toBe(true);
  });

  it('should provide connect function', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example');
    });

    expect(result.current.isConnectorConnected('example')).toBe(true);
  });

  it('should provide disconnect function', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example');
    });

    expect(result.current.isConnectorConnected('example')).toBe(true);

    act(() => {
      result.current.disconnect('example');
    });

    expect(result.current.isConnectorConnected('example')).toBe(false);
  });

  it('should provide connector states', () => {
    const { result } = renderHook(() => useConnectors());

    act(() => {
      result.current.connect('example', 'test-key');
    });

    const state = result.current.getConnectorState('example');
    expect(state).toBeDefined();
    expect(state?.status).toBe('connected');
    expect(state?.apiKey).toBe('test-key');
  });

  it('should return all available connectors', () => {
    const { result } = renderHook(() => useConnectors());

    const allConnectors = result.current.getAllConnectors();
    expect(allConnectors).toBeDefined();
    expect(Array.isArray(allConnectors)).toBe(true);
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
