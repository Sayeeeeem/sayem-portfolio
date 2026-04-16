class NoopIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

class NoopResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const globalScope = globalThis as typeof globalThis & {
  IntersectionObserver?: typeof IntersectionObserver;
  ResizeObserver?: typeof ResizeObserver;
};

if (typeof globalScope.IntersectionObserver === "undefined") {
  globalScope.IntersectionObserver = NoopIntersectionObserver as typeof IntersectionObserver;
}

if (typeof globalScope.ResizeObserver === "undefined") {
  globalScope.ResizeObserver = NoopResizeObserver as typeof ResizeObserver;
}
