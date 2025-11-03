import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [],
        include: ['./tests/**/?(*.)+(spec|test).[t]s?(x)'],
        globalSetup: [
            //'./src/hooks/vitest-global-setup.ts',
            //'./src/hooks/jwt-init.ts'
        ],
        testTimeout: 120000
    }
});
