#! /usr/bin/env node
import meow from 'meow';
import { display } from './ui';

const cli = meow(
  `
	Usage
    $ forexmm <num>
`,
  {
    flags: {
      help: {
        type: 'boolean',
        default: false
      }
    }
  }
);

const { help } = cli.flags;

if (help) {
  cli.showHelp(0);
}

display();
