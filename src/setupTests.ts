import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion viewport animations in JSDOM
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});
