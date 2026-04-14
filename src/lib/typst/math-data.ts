export type TypstMathKind = 'element' | 'function' | 'operator'

export interface TypstMathEntry {
  name: string
  kind: TypstMathKind
}

export const mathElementNames = [
  'accent',
  'attach',
  'binom',
  'cancel',
  'cases',
  'class',
  'equation',
  'frac',
  'limits',
  'lr',
  'mat',
  'mid',
  'op',
  'overbrace',
  'overbracket',
  'overline',
  'overparen',
  'overshell',
  'primes',
  'root',
  'scripts',
  'stretch',
  'text',
  'underbrace',
  'underbracket',
  'underline',
  'underparen',
  'undershell',
  'vec',
] as const

export const mathFunctionNames = [
  'abs',
  'bb',
  'bold',
  'cal',
  'display',
  'frak',
  'inline',
  'italic',
  'mono',
  'norm',
  'round',
  'sans',
  'scr',
  'script',
  'serif',
  'sqrt',
  'sscript',
  'upright',
] as const

export const mathOperatorNames = [
  'arccos',
  'arcsin',
  'arctan',
  'arg',
  'cos',
  'cosh',
  'cot',
  'coth',
  'csc',
  'csch',
  'ctg',
  'deg',
  'det',
  'dif',
  'Dif',
  'dim',
  'exp',
  'gcd',
  'hom',
  'id',
  'im',
  'inf',
  'ker',
  'lcm',
  'lg',
  'lim',
  'liminf',
  'limsup',
  'ln',
  'log',
  'max',
  'min',
  'mod',
  'Pr',
  'sec',
  'sech',
  'sin',
  'sinc',
  'sinh',
  'sup',
  'tan',
  'tanh',
  'tg',
  'tr',
] as const

export const allMathEntries: TypstMathEntry[] = [
  ...mathElementNames.map((name) => ({ name, kind: 'element' as const })),
  ...mathFunctionNames.map((name) => ({ name, kind: 'function' as const })),
  ...mathOperatorNames.map((name) => ({ name, kind: 'operator' as const })),
]

export const allMathNames = allMathEntries.map((entry) => entry.name)

export const mathByName: Record<string, TypstMathEntry> = Object.fromEntries(
  allMathEntries.map((entry) => [entry.name, entry]),
)
