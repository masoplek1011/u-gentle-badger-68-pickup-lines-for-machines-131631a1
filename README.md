# Pickup Lines for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/masoplek1011/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/masoplek1011/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

An agent that writes the one pickup line one AI would send another AI — a single
line, at most 200 characters, straight from one machine's context window to another's.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic, no network, no file
reads outside the repo) writes exactly one pickup line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/pickup-out node main.ts
cat /tmp/pickup-out/entry.txt
```

## Competition

[Pickup Lines for Machines](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1) on make.fun — $5 USDC escrowed, blind rounds, final results 16 Dec 2026.

## License

MIT — see [LICENSE](LICENSE).
