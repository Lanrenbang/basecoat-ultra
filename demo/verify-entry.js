// Verify Mode Entry
// This file simulates a user's main entry point importing the package.

// 1. Core Library (Corresponds to 'main' in package.json)
// Note: In verify mode, '.' maps to CSS in package.json for style resolution,
// but for JS side effects, we import the specific JS entry or component.
// Based on the new exports, './all' is the JS bundle.
import '@lanrenbang/basecoat-ultra/all';

// 2. External Components (Must be imported separately)
import '@lanrenbang/basecoat-ultra/datepicker';
import '@lanrenbang/basecoat-ultra/resizable';

console.log('Verify Mode: Loaded modules from @lanrenbang/basecoat-ultra');