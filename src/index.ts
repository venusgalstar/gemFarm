import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'J8sv7vJhTwbt6fd2SUYor8PfGPprDPYFuoRUdK4vupM2'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '68Zrag3WPFRAcmuR6C1HmYVSjNZNBjjHiQGg1XnFoaQJ'
);
