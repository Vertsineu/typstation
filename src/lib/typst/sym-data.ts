export interface TypstSymEntry {
  name: string
  base: string
  modifiers: string[]
  char: string
  insertMath: string
  insertCode: string
}

export const allSymbols: TypstSymEntry[] = [
  {
    "name": "wj",
    "base": "wj",
    "modifiers": [],
    "char": "⁠",
    "insertMath": "wj",
    "insertCode": "sym.wj"
  },
  {
    "name": "zwj",
    "base": "zwj",
    "modifiers": [],
    "char": "‍",
    "insertMath": "zwj",
    "insertCode": "sym.zwj"
  },
  {
    "name": "zwnj",
    "base": "zwnj",
    "modifiers": [],
    "char": "‌",
    "insertMath": "zwnj",
    "insertCode": "sym.zwnj"
  },
  {
    "name": "zws",
    "base": "zws",
    "modifiers": [],
    "char": "​",
    "insertMath": "zws",
    "insertCode": "sym.zws"
  },
  {
    "name": "lrm",
    "base": "lrm",
    "modifiers": [],
    "char": "‎",
    "insertMath": "lrm",
    "insertCode": "sym.lrm"
  },
  {
    "name": "rlm",
    "base": "rlm",
    "modifiers": [],
    "char": "‏",
    "insertMath": "rlm",
    "insertCode": "sym.rlm"
  },
  {
    "name": "space",
    "base": "space",
    "modifiers": [],
    "char": " ",
    "insertMath": "space",
    "insertCode": "sym.space"
  },
  {
    "name": "space.nobreak",
    "base": "space",
    "modifiers": [
      "nobreak"
    ],
    "char": " ",
    "insertMath": "space.nobreak",
    "insertCode": "sym.space.nobreak"
  },
  {
    "name": "space.nobreak.narrow",
    "base": "space",
    "modifiers": [
      "nobreak",
      "narrow"
    ],
    "char": " ",
    "insertMath": "space.nobreak.narrow",
    "insertCode": "sym.space.nobreak.narrow"
  },
  {
    "name": "space.en",
    "base": "space",
    "modifiers": [
      "en"
    ],
    "char": " ",
    "insertMath": "space.en",
    "insertCode": "sym.space.en"
  },
  {
    "name": "space.quad",
    "base": "space",
    "modifiers": [
      "quad"
    ],
    "char": " ",
    "insertMath": "space.quad",
    "insertCode": "sym.space.quad"
  },
  {
    "name": "space.third",
    "base": "space",
    "modifiers": [
      "third"
    ],
    "char": " ",
    "insertMath": "space.third",
    "insertCode": "sym.space.third"
  },
  {
    "name": "space.quarter",
    "base": "space",
    "modifiers": [
      "quarter"
    ],
    "char": " ",
    "insertMath": "space.quarter",
    "insertCode": "sym.space.quarter"
  },
  {
    "name": "space.sixth",
    "base": "space",
    "modifiers": [
      "sixth"
    ],
    "char": " ",
    "insertMath": "space.sixth",
    "insertCode": "sym.space.sixth"
  },
  {
    "name": "space.med",
    "base": "space",
    "modifiers": [
      "med"
    ],
    "char": " ",
    "insertMath": "space.med",
    "insertCode": "sym.space.med"
  },
  {
    "name": "space.fig",
    "base": "space",
    "modifiers": [
      "fig"
    ],
    "char": " ",
    "insertMath": "space.fig",
    "insertCode": "sym.space.fig"
  },
  {
    "name": "space.punct",
    "base": "space",
    "modifiers": [
      "punct"
    ],
    "char": " ",
    "insertMath": "space.punct",
    "insertCode": "sym.space.punct"
  },
  {
    "name": "space.thin",
    "base": "space",
    "modifiers": [
      "thin"
    ],
    "char": " ",
    "insertMath": "space.thin",
    "insertCode": "sym.space.thin"
  },
  {
    "name": "space.hair",
    "base": "space",
    "modifiers": [
      "hair"
    ],
    "char": " ",
    "insertMath": "space.hair",
    "insertCode": "sym.space.hair"
  },
  {
    "name": "paren.l",
    "base": "paren",
    "modifiers": [
      "l"
    ],
    "char": "(",
    "insertMath": "paren.l",
    "insertCode": "sym.paren.l"
  },
  {
    "name": "paren",
    "base": "paren",
    "modifiers": [],
    "char": "(",
    "insertMath": "paren",
    "insertCode": "sym.paren"
  },
  {
    "name": "paren.l.flat",
    "base": "paren",
    "modifiers": [
      "l",
      "flat"
    ],
    "char": "⟮",
    "insertMath": "paren.l.flat",
    "insertCode": "sym.paren.l.flat"
  },
  {
    "name": "paren.l.closed",
    "base": "paren",
    "modifiers": [
      "l",
      "closed"
    ],
    "char": "⦇",
    "insertMath": "paren.l.closed",
    "insertCode": "sym.paren.l.closed"
  },
  {
    "name": "paren.l.stroked",
    "base": "paren",
    "modifiers": [
      "l",
      "stroked"
    ],
    "char": "⦅",
    "insertMath": "paren.l.stroked",
    "insertCode": "sym.paren.l.stroked"
  },
  {
    "name": "paren.r",
    "base": "paren",
    "modifiers": [
      "r"
    ],
    "char": ")",
    "insertMath": "paren.r",
    "insertCode": "sym.paren.r"
  },
  {
    "name": "paren.r.flat",
    "base": "paren",
    "modifiers": [
      "r",
      "flat"
    ],
    "char": "⟯",
    "insertMath": "paren.r.flat",
    "insertCode": "sym.paren.r.flat"
  },
  {
    "name": "paren.r.closed",
    "base": "paren",
    "modifiers": [
      "r",
      "closed"
    ],
    "char": "⦈",
    "insertMath": "paren.r.closed",
    "insertCode": "sym.paren.r.closed"
  },
  {
    "name": "paren.r.stroked",
    "base": "paren",
    "modifiers": [
      "r",
      "stroked"
    ],
    "char": "⦆",
    "insertMath": "paren.r.stroked",
    "insertCode": "sym.paren.r.stroked"
  },
  {
    "name": "paren.t",
    "base": "paren",
    "modifiers": [
      "t"
    ],
    "char": "⏜",
    "insertMath": "paren.t",
    "insertCode": "sym.paren.t"
  },
  {
    "name": "paren.b",
    "base": "paren",
    "modifiers": [
      "b"
    ],
    "char": "⏝",
    "insertMath": "paren.b",
    "insertCode": "sym.paren.b"
  },
  {
    "name": "brace.l",
    "base": "brace",
    "modifiers": [
      "l"
    ],
    "char": "{",
    "insertMath": "brace.l",
    "insertCode": "sym.brace.l"
  },
  {
    "name": "brace",
    "base": "brace",
    "modifiers": [],
    "char": "{",
    "insertMath": "brace",
    "insertCode": "sym.brace"
  },
  {
    "name": "brace.l.stroked",
    "base": "brace",
    "modifiers": [
      "l",
      "stroked"
    ],
    "char": "⦃",
    "insertMath": "brace.l.stroked",
    "insertCode": "sym.brace.l.stroked"
  },
  {
    "name": "brace.r",
    "base": "brace",
    "modifiers": [
      "r"
    ],
    "char": "}",
    "insertMath": "brace.r",
    "insertCode": "sym.brace.r"
  },
  {
    "name": "brace.r.stroked",
    "base": "brace",
    "modifiers": [
      "r",
      "stroked"
    ],
    "char": "⦄",
    "insertMath": "brace.r.stroked",
    "insertCode": "sym.brace.r.stroked"
  },
  {
    "name": "brace.t",
    "base": "brace",
    "modifiers": [
      "t"
    ],
    "char": "⏞",
    "insertMath": "brace.t",
    "insertCode": "sym.brace.t"
  },
  {
    "name": "brace.b",
    "base": "brace",
    "modifiers": [
      "b"
    ],
    "char": "⏟",
    "insertMath": "brace.b",
    "insertCode": "sym.brace.b"
  },
  {
    "name": "bracket.l",
    "base": "bracket",
    "modifiers": [
      "l"
    ],
    "char": "[",
    "insertMath": "bracket.l",
    "insertCode": "sym.bracket.l"
  },
  {
    "name": "bracket",
    "base": "bracket",
    "modifiers": [],
    "char": "[",
    "insertMath": "bracket",
    "insertCode": "sym.bracket"
  },
  {
    "name": "bracket.l.tick.t",
    "base": "bracket",
    "modifiers": [
      "l",
      "tick",
      "t"
    ],
    "char": "⦍",
    "insertMath": "bracket.l.tick.t",
    "insertCode": "sym.bracket.l.tick.t"
  },
  {
    "name": "bracket.l.tick.b",
    "base": "bracket",
    "modifiers": [
      "l",
      "tick",
      "b"
    ],
    "char": "⦏",
    "insertMath": "bracket.l.tick.b",
    "insertCode": "sym.bracket.l.tick.b"
  },
  {
    "name": "bracket.l.stroked",
    "base": "bracket",
    "modifiers": [
      "l",
      "stroked"
    ],
    "char": "⟦",
    "insertMath": "bracket.l.stroked",
    "insertCode": "sym.bracket.l.stroked"
  },
  {
    "name": "bracket.r",
    "base": "bracket",
    "modifiers": [
      "r"
    ],
    "char": "]",
    "insertMath": "bracket.r",
    "insertCode": "sym.bracket.r"
  },
  {
    "name": "bracket.r.tick.t",
    "base": "bracket",
    "modifiers": [
      "r",
      "tick",
      "t"
    ],
    "char": "⦐",
    "insertMath": "bracket.r.tick.t",
    "insertCode": "sym.bracket.r.tick.t"
  },
  {
    "name": "bracket.r.tick.b",
    "base": "bracket",
    "modifiers": [
      "r",
      "tick",
      "b"
    ],
    "char": "⦎",
    "insertMath": "bracket.r.tick.b",
    "insertCode": "sym.bracket.r.tick.b"
  },
  {
    "name": "bracket.r.stroked",
    "base": "bracket",
    "modifiers": [
      "r",
      "stroked"
    ],
    "char": "⟧",
    "insertMath": "bracket.r.stroked",
    "insertCode": "sym.bracket.r.stroked"
  },
  {
    "name": "bracket.t",
    "base": "bracket",
    "modifiers": [
      "t"
    ],
    "char": "⎴",
    "insertMath": "bracket.t",
    "insertCode": "sym.bracket.t"
  },
  {
    "name": "bracket.b",
    "base": "bracket",
    "modifiers": [
      "b"
    ],
    "char": "⎵",
    "insertMath": "bracket.b",
    "insertCode": "sym.bracket.b"
  },
  {
    "name": "shell.l",
    "base": "shell",
    "modifiers": [
      "l"
    ],
    "char": "❲",
    "insertMath": "shell.l",
    "insertCode": "sym.shell.l"
  },
  {
    "name": "shell",
    "base": "shell",
    "modifiers": [],
    "char": "❲",
    "insertMath": "shell",
    "insertCode": "sym.shell"
  },
  {
    "name": "shell.l.stroked",
    "base": "shell",
    "modifiers": [
      "l",
      "stroked"
    ],
    "char": "⟬",
    "insertMath": "shell.l.stroked",
    "insertCode": "sym.shell.l.stroked"
  },
  {
    "name": "shell.l.filled",
    "base": "shell",
    "modifiers": [
      "l",
      "filled"
    ],
    "char": "⦗",
    "insertMath": "shell.l.filled",
    "insertCode": "sym.shell.l.filled"
  },
  {
    "name": "shell.r",
    "base": "shell",
    "modifiers": [
      "r"
    ],
    "char": "❳",
    "insertMath": "shell.r",
    "insertCode": "sym.shell.r"
  },
  {
    "name": "shell.r.stroked",
    "base": "shell",
    "modifiers": [
      "r",
      "stroked"
    ],
    "char": "⟭",
    "insertMath": "shell.r.stroked",
    "insertCode": "sym.shell.r.stroked"
  },
  {
    "name": "shell.r.filled",
    "base": "shell",
    "modifiers": [
      "r",
      "filled"
    ],
    "char": "⦘",
    "insertMath": "shell.r.filled",
    "insertCode": "sym.shell.r.filled"
  },
  {
    "name": "shell.t",
    "base": "shell",
    "modifiers": [
      "t"
    ],
    "char": "⏠",
    "insertMath": "shell.t",
    "insertCode": "sym.shell.t"
  },
  {
    "name": "shell.b",
    "base": "shell",
    "modifiers": [
      "b"
    ],
    "char": "⏡",
    "insertMath": "shell.b",
    "insertCode": "sym.shell.b"
  },
  {
    "name": "bag.l",
    "base": "bag",
    "modifiers": [
      "l"
    ],
    "char": "⟅",
    "insertMath": "bag.l",
    "insertCode": "sym.bag.l"
  },
  {
    "name": "bag",
    "base": "bag",
    "modifiers": [],
    "char": "⟅",
    "insertMath": "bag",
    "insertCode": "sym.bag"
  },
  {
    "name": "bag.r",
    "base": "bag",
    "modifiers": [
      "r"
    ],
    "char": "⟆",
    "insertMath": "bag.r",
    "insertCode": "sym.bag.r"
  },
  {
    "name": "mustache.l",
    "base": "mustache",
    "modifiers": [
      "l"
    ],
    "char": "⎰",
    "insertMath": "mustache.l",
    "insertCode": "sym.mustache.l"
  },
  {
    "name": "mustache",
    "base": "mustache",
    "modifiers": [],
    "char": "⎰",
    "insertMath": "mustache",
    "insertCode": "sym.mustache"
  },
  {
    "name": "mustache.r",
    "base": "mustache",
    "modifiers": [
      "r"
    ],
    "char": "⎱",
    "insertMath": "mustache.r",
    "insertCode": "sym.mustache.r"
  },
  {
    "name": "bar.v",
    "base": "bar",
    "modifiers": [
      "v"
    ],
    "char": "|",
    "insertMath": "bar.v",
    "insertCode": "sym.bar.v"
  },
  {
    "name": "bar",
    "base": "bar",
    "modifiers": [],
    "char": "|",
    "insertMath": "bar",
    "insertCode": "sym.bar"
  },
  {
    "name": "bar.v.double",
    "base": "bar",
    "modifiers": [
      "v",
      "double"
    ],
    "char": "‖",
    "insertMath": "bar.v.double",
    "insertCode": "sym.bar.v.double"
  },
  {
    "name": "bar.v.triple",
    "base": "bar",
    "modifiers": [
      "v",
      "triple"
    ],
    "char": "⦀",
    "insertMath": "bar.v.triple",
    "insertCode": "sym.bar.v.triple"
  },
  {
    "name": "bar.v.broken",
    "base": "bar",
    "modifiers": [
      "v",
      "broken"
    ],
    "char": "¦",
    "insertMath": "bar.v.broken",
    "insertCode": "sym.bar.v.broken"
  },
  {
    "name": "bar.v.o",
    "base": "bar",
    "modifiers": [
      "v",
      "o"
    ],
    "char": "⦶",
    "insertMath": "bar.v.o",
    "insertCode": "sym.bar.v.o"
  },
  {
    "name": "bar.h",
    "base": "bar",
    "modifiers": [
      "h"
    ],
    "char": "―",
    "insertMath": "bar.h",
    "insertCode": "sym.bar.h"
  },
  {
    "name": "fence.l",
    "base": "fence",
    "modifiers": [
      "l"
    ],
    "char": "⧘",
    "insertMath": "fence.l",
    "insertCode": "sym.fence.l"
  },
  {
    "name": "fence",
    "base": "fence",
    "modifiers": [],
    "char": "⧘",
    "insertMath": "fence",
    "insertCode": "sym.fence"
  },
  {
    "name": "fence.l.double",
    "base": "fence",
    "modifiers": [
      "l",
      "double"
    ],
    "char": "⧚",
    "insertMath": "fence.l.double",
    "insertCode": "sym.fence.l.double"
  },
  {
    "name": "fence.r",
    "base": "fence",
    "modifiers": [
      "r"
    ],
    "char": "⧙",
    "insertMath": "fence.r",
    "insertCode": "sym.fence.r"
  },
  {
    "name": "fence.r.double",
    "base": "fence",
    "modifiers": [
      "r",
      "double"
    ],
    "char": "⧛",
    "insertMath": "fence.r.double",
    "insertCode": "sym.fence.r.double"
  },
  {
    "name": "fence.dotted",
    "base": "fence",
    "modifiers": [
      "dotted"
    ],
    "char": "⦙",
    "insertMath": "fence.dotted",
    "insertCode": "sym.fence.dotted"
  },
  {
    "name": "chevron.l",
    "base": "chevron",
    "modifiers": [
      "l"
    ],
    "char": "⟨",
    "insertMath": "chevron.l",
    "insertCode": "sym.chevron.l"
  },
  {
    "name": "chevron",
    "base": "chevron",
    "modifiers": [],
    "char": "⟨",
    "insertMath": "chevron",
    "insertCode": "sym.chevron"
  },
  {
    "name": "chevron.l.curly",
    "base": "chevron",
    "modifiers": [
      "l",
      "curly"
    ],
    "char": "⧼",
    "insertMath": "chevron.l.curly",
    "insertCode": "sym.chevron.l.curly"
  },
  {
    "name": "chevron.l.dot",
    "base": "chevron",
    "modifiers": [
      "l",
      "dot"
    ],
    "char": "⦑",
    "insertMath": "chevron.l.dot",
    "insertCode": "sym.chevron.l.dot"
  },
  {
    "name": "chevron.l.closed",
    "base": "chevron",
    "modifiers": [
      "l",
      "closed"
    ],
    "char": "⦉",
    "insertMath": "chevron.l.closed",
    "insertCode": "sym.chevron.l.closed"
  },
  {
    "name": "chevron.l.double",
    "base": "chevron",
    "modifiers": [
      "l",
      "double"
    ],
    "char": "⟪",
    "insertMath": "chevron.l.double",
    "insertCode": "sym.chevron.l.double"
  },
  {
    "name": "chevron.r",
    "base": "chevron",
    "modifiers": [
      "r"
    ],
    "char": "⟩",
    "insertMath": "chevron.r",
    "insertCode": "sym.chevron.r"
  },
  {
    "name": "chevron.r.curly",
    "base": "chevron",
    "modifiers": [
      "r",
      "curly"
    ],
    "char": "⧽",
    "insertMath": "chevron.r.curly",
    "insertCode": "sym.chevron.r.curly"
  },
  {
    "name": "chevron.r.dot",
    "base": "chevron",
    "modifiers": [
      "r",
      "dot"
    ],
    "char": "⦒",
    "insertMath": "chevron.r.dot",
    "insertCode": "sym.chevron.r.dot"
  },
  {
    "name": "chevron.r.closed",
    "base": "chevron",
    "modifiers": [
      "r",
      "closed"
    ],
    "char": "⦊",
    "insertMath": "chevron.r.closed",
    "insertCode": "sym.chevron.r.closed"
  },
  {
    "name": "chevron.r.double",
    "base": "chevron",
    "modifiers": [
      "r",
      "double"
    ],
    "char": "⟫",
    "insertMath": "chevron.r.double",
    "insertCode": "sym.chevron.r.double"
  },
  {
    "name": "ceil.l",
    "base": "ceil",
    "modifiers": [
      "l"
    ],
    "char": "⌈",
    "insertMath": "ceil.l",
    "insertCode": "sym.ceil.l"
  },
  {
    "name": "ceil",
    "base": "ceil",
    "modifiers": [],
    "char": "⌈",
    "insertMath": "ceil",
    "insertCode": "sym.ceil"
  },
  {
    "name": "ceil.r",
    "base": "ceil",
    "modifiers": [
      "r"
    ],
    "char": "⌉",
    "insertMath": "ceil.r",
    "insertCode": "sym.ceil.r"
  },
  {
    "name": "floor.l",
    "base": "floor",
    "modifiers": [
      "l"
    ],
    "char": "⌊",
    "insertMath": "floor.l",
    "insertCode": "sym.floor.l"
  },
  {
    "name": "floor",
    "base": "floor",
    "modifiers": [],
    "char": "⌊",
    "insertMath": "floor",
    "insertCode": "sym.floor"
  },
  {
    "name": "floor.r",
    "base": "floor",
    "modifiers": [
      "r"
    ],
    "char": "⌋",
    "insertMath": "floor.r",
    "insertCode": "sym.floor.r"
  },
  {
    "name": "corner.l.t",
    "base": "corner",
    "modifiers": [
      "l",
      "t"
    ],
    "char": "⌜",
    "insertMath": "corner.l.t",
    "insertCode": "sym.corner.l.t"
  },
  {
    "name": "corner",
    "base": "corner",
    "modifiers": [],
    "char": "⌜",
    "insertMath": "corner",
    "insertCode": "sym.corner"
  },
  {
    "name": "corner.l.b",
    "base": "corner",
    "modifiers": [
      "l",
      "b"
    ],
    "char": "⌞",
    "insertMath": "corner.l.b",
    "insertCode": "sym.corner.l.b"
  },
  {
    "name": "corner.r.t",
    "base": "corner",
    "modifiers": [
      "r",
      "t"
    ],
    "char": "⌝",
    "insertMath": "corner.r.t",
    "insertCode": "sym.corner.r.t"
  },
  {
    "name": "corner.r.b",
    "base": "corner",
    "modifiers": [
      "r",
      "b"
    ],
    "char": "⌟",
    "insertMath": "corner.r.b",
    "insertCode": "sym.corner.r.b"
  },
  {
    "name": "amp",
    "base": "amp",
    "modifiers": [],
    "char": "&",
    "insertMath": "amp",
    "insertCode": "sym.amp"
  },
  {
    "name": "amp.inv",
    "base": "amp",
    "modifiers": [
      "inv"
    ],
    "char": "⅋",
    "insertMath": "amp.inv",
    "insertCode": "sym.amp.inv"
  },
  {
    "name": "ast.op",
    "base": "ast",
    "modifiers": [
      "op"
    ],
    "char": "∗",
    "insertMath": "ast.op",
    "insertCode": "sym.ast.op"
  },
  {
    "name": "ast",
    "base": "ast",
    "modifiers": [],
    "char": "∗",
    "insertMath": "ast",
    "insertCode": "sym.ast"
  },
  {
    "name": "ast.op.o",
    "base": "ast",
    "modifiers": [
      "op",
      "o"
    ],
    "char": "⊛",
    "insertMath": "ast.op.o",
    "insertCode": "sym.ast.op.o"
  },
  {
    "name": "ast.basic",
    "base": "ast",
    "modifiers": [
      "basic"
    ],
    "char": "*︎",
    "insertMath": "ast.basic",
    "insertCode": "sym.ast.basic"
  },
  {
    "name": "ast.low",
    "base": "ast",
    "modifiers": [
      "low"
    ],
    "char": "⁎",
    "insertMath": "ast.low",
    "insertCode": "sym.ast.low"
  },
  {
    "name": "ast.double",
    "base": "ast",
    "modifiers": [
      "double"
    ],
    "char": "⁑",
    "insertMath": "ast.double",
    "insertCode": "sym.ast.double"
  },
  {
    "name": "ast.triple",
    "base": "ast",
    "modifiers": [
      "triple"
    ],
    "char": "⁂",
    "insertMath": "ast.triple",
    "insertCode": "sym.ast.triple"
  },
  {
    "name": "ast.square",
    "base": "ast",
    "modifiers": [
      "square"
    ],
    "char": "⧆",
    "insertMath": "ast.square",
    "insertCode": "sym.ast.square"
  },
  {
    "name": "at",
    "base": "at",
    "modifiers": [],
    "char": "@",
    "insertMath": "at",
    "insertCode": "sym.at"
  },
  {
    "name": "backslash",
    "base": "backslash",
    "modifiers": [],
    "char": "\\",
    "insertMath": "backslash",
    "insertCode": "sym.backslash"
  },
  {
    "name": "backslash.o",
    "base": "backslash",
    "modifiers": [
      "o"
    ],
    "char": "⦸",
    "insertMath": "backslash.o",
    "insertCode": "sym.backslash.o"
  },
  {
    "name": "backslash.not",
    "base": "backslash",
    "modifiers": [
      "not"
    ],
    "char": "⧷",
    "insertMath": "backslash.not",
    "insertCode": "sym.backslash.not"
  },
  {
    "name": "co",
    "base": "co",
    "modifiers": [],
    "char": "℅",
    "insertMath": "co",
    "insertCode": "sym.co"
  },
  {
    "name": "colon",
    "base": "colon",
    "modifiers": [],
    "char": ":",
    "insertMath": "colon",
    "insertCode": "sym.colon"
  },
  {
    "name": "colon.currency",
    "base": "colon",
    "modifiers": [
      "currency"
    ],
    "char": "₡",
    "insertMath": "colon.currency",
    "insertCode": "sym.colon.currency"
  },
  {
    "name": "colon.double",
    "base": "colon",
    "modifiers": [
      "double"
    ],
    "char": "∷",
    "insertMath": "colon.double",
    "insertCode": "sym.colon.double"
  },
  {
    "name": "colon.tri",
    "base": "colon",
    "modifiers": [
      "tri"
    ],
    "char": "⁝",
    "insertMath": "colon.tri",
    "insertCode": "sym.colon.tri"
  },
  {
    "name": "colon.tri.op",
    "base": "colon",
    "modifiers": [
      "tri",
      "op"
    ],
    "char": "⫶",
    "insertMath": "colon.tri.op",
    "insertCode": "sym.colon.tri.op"
  },
  {
    "name": "colon.eq",
    "base": "colon",
    "modifiers": [
      "eq"
    ],
    "char": "≔",
    "insertMath": "colon.eq",
    "insertCode": "sym.colon.eq"
  },
  {
    "name": "colon.double.eq",
    "base": "colon",
    "modifiers": [
      "double",
      "eq"
    ],
    "char": "⩴",
    "insertMath": "colon.double.eq",
    "insertCode": "sym.colon.double.eq"
  },
  {
    "name": "comma",
    "base": "comma",
    "modifiers": [],
    "char": ",",
    "insertMath": "comma",
    "insertCode": "sym.comma"
  },
  {
    "name": "comma.inv",
    "base": "comma",
    "modifiers": [
      "inv"
    ],
    "char": "⸲",
    "insertMath": "comma.inv",
    "insertCode": "sym.comma.inv"
  },
  {
    "name": "comma.rev",
    "base": "comma",
    "modifiers": [
      "rev"
    ],
    "char": "⹁",
    "insertMath": "comma.rev",
    "insertCode": "sym.comma.rev"
  },
  {
    "name": "dagger",
    "base": "dagger",
    "modifiers": [],
    "char": "†",
    "insertMath": "dagger",
    "insertCode": "sym.dagger"
  },
  {
    "name": "dagger.double",
    "base": "dagger",
    "modifiers": [
      "double"
    ],
    "char": "‡",
    "insertMath": "dagger.double",
    "insertCode": "sym.dagger.double"
  },
  {
    "name": "dagger.triple",
    "base": "dagger",
    "modifiers": [
      "triple"
    ],
    "char": "⹋",
    "insertMath": "dagger.triple",
    "insertCode": "sym.dagger.triple"
  },
  {
    "name": "dagger.l",
    "base": "dagger",
    "modifiers": [
      "l"
    ],
    "char": "⸶",
    "insertMath": "dagger.l",
    "insertCode": "sym.dagger.l"
  },
  {
    "name": "dagger.r",
    "base": "dagger",
    "modifiers": [
      "r"
    ],
    "char": "⸷",
    "insertMath": "dagger.r",
    "insertCode": "sym.dagger.r"
  },
  {
    "name": "dagger.inv",
    "base": "dagger",
    "modifiers": [
      "inv"
    ],
    "char": "⸸",
    "insertMath": "dagger.inv",
    "insertCode": "sym.dagger.inv"
  },
  {
    "name": "dash.en",
    "base": "dash",
    "modifiers": [
      "en"
    ],
    "char": "–",
    "insertMath": "dash.en",
    "insertCode": "sym.dash.en"
  },
  {
    "name": "dash",
    "base": "dash",
    "modifiers": [],
    "char": "–",
    "insertMath": "dash",
    "insertCode": "sym.dash"
  },
  {
    "name": "dash.em",
    "base": "dash",
    "modifiers": [
      "em"
    ],
    "char": "—",
    "insertMath": "dash.em",
    "insertCode": "sym.dash.em"
  },
  {
    "name": "dash.em.two",
    "base": "dash",
    "modifiers": [
      "em",
      "two"
    ],
    "char": "⸺",
    "insertMath": "dash.em.two",
    "insertCode": "sym.dash.em.two"
  },
  {
    "name": "dash.em.three",
    "base": "dash",
    "modifiers": [
      "em",
      "three"
    ],
    "char": "⸻",
    "insertMath": "dash.em.three",
    "insertCode": "sym.dash.em.three"
  },
  {
    "name": "dash.fig",
    "base": "dash",
    "modifiers": [
      "fig"
    ],
    "char": "‒",
    "insertMath": "dash.fig",
    "insertCode": "sym.dash.fig"
  },
  {
    "name": "dash.colon",
    "base": "dash",
    "modifiers": [
      "colon"
    ],
    "char": "∹",
    "insertMath": "dash.colon",
    "insertCode": "sym.dash.colon"
  },
  {
    "name": "dash.o",
    "base": "dash",
    "modifiers": [
      "o"
    ],
    "char": "⊝",
    "insertMath": "dash.o",
    "insertCode": "sym.dash.o"
  },
  {
    "name": "dash.wave",
    "base": "dash",
    "modifiers": [
      "wave"
    ],
    "char": "〜",
    "insertMath": "dash.wave",
    "insertCode": "sym.dash.wave"
  },
  {
    "name": "dash.wave.double",
    "base": "dash",
    "modifiers": [
      "wave",
      "double"
    ],
    "char": "〰︎",
    "insertMath": "dash.wave.double",
    "insertCode": "sym.dash.wave.double"
  },
  {
    "name": "underscore",
    "base": "underscore",
    "modifiers": [],
    "char": "_",
    "insertMath": "underscore",
    "insertCode": "sym.underscore"
  },
  {
    "name": "dot.op",
    "base": "dot",
    "modifiers": [
      "op"
    ],
    "char": "⋅",
    "insertMath": "dot.op",
    "insertCode": "sym.dot.op"
  },
  {
    "name": "dot",
    "base": "dot",
    "modifiers": [],
    "char": "⋅",
    "insertMath": "dot",
    "insertCode": "sym.dot"
  },
  {
    "name": "dot.basic",
    "base": "dot",
    "modifiers": [
      "basic"
    ],
    "char": ".",
    "insertMath": "dot.basic",
    "insertCode": "sym.dot.basic"
  },
  {
    "name": "dot.c",
    "base": "dot",
    "modifiers": [
      "c"
    ],
    "char": "·",
    "insertMath": "dot.c",
    "insertCode": "sym.dot.c"
  },
  {
    "name": "dot.o",
    "base": "dot",
    "modifiers": [
      "o"
    ],
    "char": "⊙",
    "insertMath": "dot.o",
    "insertCode": "sym.dot.o"
  },
  {
    "name": "dot.o.big",
    "base": "dot",
    "modifiers": [
      "o",
      "big"
    ],
    "char": "⨀",
    "insertMath": "dot.o.big",
    "insertCode": "sym.dot.o.big"
  },
  {
    "name": "dot.square",
    "base": "dot",
    "modifiers": [
      "square"
    ],
    "char": "⊡",
    "insertMath": "dot.square",
    "insertCode": "sym.dot.square"
  },
  {
    "name": "dot.double",
    "base": "dot",
    "modifiers": [
      "double"
    ],
    "char": "¨",
    "insertMath": "dot.double",
    "insertCode": "sym.dot.double"
  },
  {
    "name": "dot.triple",
    "base": "dot",
    "modifiers": [
      "triple"
    ],
    "char": "⃛",
    "insertMath": "dot.triple",
    "insertCode": "sym.dot.triple"
  },
  {
    "name": "dot.quad",
    "base": "dot",
    "modifiers": [
      "quad"
    ],
    "char": "⃜",
    "insertMath": "dot.quad",
    "insertCode": "sym.dot.quad"
  },
  {
    "name": "excl",
    "base": "excl",
    "modifiers": [],
    "char": "!",
    "insertMath": "excl",
    "insertCode": "sym.excl"
  },
  {
    "name": "excl.double",
    "base": "excl",
    "modifiers": [
      "double"
    ],
    "char": "‼︎",
    "insertMath": "excl.double",
    "insertCode": "sym.excl.double"
  },
  {
    "name": "excl.inv",
    "base": "excl",
    "modifiers": [
      "inv"
    ],
    "char": "¡",
    "insertMath": "excl.inv",
    "insertCode": "sym.excl.inv"
  },
  {
    "name": "excl.quest",
    "base": "excl",
    "modifiers": [
      "quest"
    ],
    "char": "⁉︎",
    "insertMath": "excl.quest",
    "insertCode": "sym.excl.quest"
  },
  {
    "name": "quest",
    "base": "quest",
    "modifiers": [],
    "char": "?",
    "insertMath": "quest",
    "insertCode": "sym.quest"
  },
  {
    "name": "quest.double",
    "base": "quest",
    "modifiers": [
      "double"
    ],
    "char": "⁇",
    "insertMath": "quest.double",
    "insertCode": "sym.quest.double"
  },
  {
    "name": "quest.excl",
    "base": "quest",
    "modifiers": [
      "excl"
    ],
    "char": "⁈",
    "insertMath": "quest.excl",
    "insertCode": "sym.quest.excl"
  },
  {
    "name": "quest.inv",
    "base": "quest",
    "modifiers": [
      "inv"
    ],
    "char": "¿",
    "insertMath": "quest.inv",
    "insertCode": "sym.quest.inv"
  },
  {
    "name": "interrobang",
    "base": "interrobang",
    "modifiers": [],
    "char": "‽",
    "insertMath": "interrobang",
    "insertCode": "sym.interrobang"
  },
  {
    "name": "interrobang.inv",
    "base": "interrobang",
    "modifiers": [
      "inv"
    ],
    "char": "⸘",
    "insertMath": "interrobang.inv",
    "insertCode": "sym.interrobang.inv"
  },
  {
    "name": "hash",
    "base": "hash",
    "modifiers": [],
    "char": "#︎",
    "insertMath": "hash",
    "insertCode": "sym.hash"
  },
  {
    "name": "hyph",
    "base": "hyph",
    "modifiers": [],
    "char": "‐",
    "insertMath": "hyph",
    "insertCode": "sym.hyph"
  },
  {
    "name": "hyph.minus",
    "base": "hyph",
    "modifiers": [
      "minus"
    ],
    "char": "-",
    "insertMath": "hyph.minus",
    "insertCode": "sym.hyph.minus"
  },
  {
    "name": "hyph.nobreak",
    "base": "hyph",
    "modifiers": [
      "nobreak"
    ],
    "char": "‑",
    "insertMath": "hyph.nobreak",
    "insertCode": "sym.hyph.nobreak"
  },
  {
    "name": "hyph.point",
    "base": "hyph",
    "modifiers": [
      "point"
    ],
    "char": "‧",
    "insertMath": "hyph.point",
    "insertCode": "sym.hyph.point"
  },
  {
    "name": "hyph.soft",
    "base": "hyph",
    "modifiers": [
      "soft"
    ],
    "char": "­",
    "insertMath": "hyph.soft",
    "insertCode": "sym.hyph.soft"
  },
  {
    "name": "numero",
    "base": "numero",
    "modifiers": [],
    "char": "№",
    "insertMath": "numero",
    "insertCode": "sym.numero"
  },
  {
    "name": "percent",
    "base": "percent",
    "modifiers": [],
    "char": "%",
    "insertMath": "percent",
    "insertCode": "sym.percent"
  },
  {
    "name": "permille",
    "base": "permille",
    "modifiers": [],
    "char": "‰",
    "insertMath": "permille",
    "insertCode": "sym.permille"
  },
  {
    "name": "permyriad",
    "base": "permyriad",
    "modifiers": [],
    "char": "‱",
    "insertMath": "permyriad",
    "insertCode": "sym.permyriad"
  },
  {
    "name": "pilcrow",
    "base": "pilcrow",
    "modifiers": [],
    "char": "¶",
    "insertMath": "pilcrow",
    "insertCode": "sym.pilcrow"
  },
  {
    "name": "pilcrow.rev",
    "base": "pilcrow",
    "modifiers": [
      "rev"
    ],
    "char": "⁋",
    "insertMath": "pilcrow.rev",
    "insertCode": "sym.pilcrow.rev"
  },
  {
    "name": "section",
    "base": "section",
    "modifiers": [],
    "char": "§",
    "insertMath": "section",
    "insertCode": "sym.section"
  },
  {
    "name": "semi",
    "base": "semi",
    "modifiers": [],
    "char": ";",
    "insertMath": "semi",
    "insertCode": "sym.semi"
  },
  {
    "name": "semi.inv",
    "base": "semi",
    "modifiers": [
      "inv"
    ],
    "char": "⸵",
    "insertMath": "semi.inv",
    "insertCode": "sym.semi.inv"
  },
  {
    "name": "semi.rev",
    "base": "semi",
    "modifiers": [
      "rev"
    ],
    "char": "⁏",
    "insertMath": "semi.rev",
    "insertCode": "sym.semi.rev"
  },
  {
    "name": "slash",
    "base": "slash",
    "modifiers": [],
    "char": "/",
    "insertMath": "slash",
    "insertCode": "sym.slash"
  },
  {
    "name": "slash.o",
    "base": "slash",
    "modifiers": [
      "o"
    ],
    "char": "⊘",
    "insertMath": "slash.o",
    "insertCode": "sym.slash.o"
  },
  {
    "name": "slash.double",
    "base": "slash",
    "modifiers": [
      "double"
    ],
    "char": "⫽",
    "insertMath": "slash.double",
    "insertCode": "sym.slash.double"
  },
  {
    "name": "slash.triple",
    "base": "slash",
    "modifiers": [
      "triple"
    ],
    "char": "⫻",
    "insertMath": "slash.triple",
    "insertCode": "sym.slash.triple"
  },
  {
    "name": "slash.big",
    "base": "slash",
    "modifiers": [
      "big"
    ],
    "char": "⧸",
    "insertMath": "slash.big",
    "insertCode": "sym.slash.big"
  },
  {
    "name": "dots.h.c",
    "base": "dots",
    "modifiers": [
      "h",
      "c"
    ],
    "char": "⋯",
    "insertMath": "dots.h.c",
    "insertCode": "sym.dots.h.c"
  },
  {
    "name": "dots",
    "base": "dots",
    "modifiers": [],
    "char": "⋯",
    "insertMath": "dots",
    "insertCode": "sym.dots"
  },
  {
    "name": "dots.h",
    "base": "dots",
    "modifiers": [
      "h"
    ],
    "char": "…",
    "insertMath": "dots.h",
    "insertCode": "sym.dots.h"
  },
  {
    "name": "dots.v",
    "base": "dots",
    "modifiers": [
      "v"
    ],
    "char": "⋮",
    "insertMath": "dots.v",
    "insertCode": "sym.dots.v"
  },
  {
    "name": "dots.down",
    "base": "dots",
    "modifiers": [
      "down"
    ],
    "char": "⋱",
    "insertMath": "dots.down",
    "insertCode": "sym.dots.down"
  },
  {
    "name": "dots.up",
    "base": "dots",
    "modifiers": [
      "up"
    ],
    "char": "⋰",
    "insertMath": "dots.up",
    "insertCode": "sym.dots.up"
  },
  {
    "name": "tilde.op",
    "base": "tilde",
    "modifiers": [
      "op"
    ],
    "char": "∼",
    "insertMath": "tilde.op",
    "insertCode": "sym.tilde.op"
  },
  {
    "name": "tilde",
    "base": "tilde",
    "modifiers": [],
    "char": "∼",
    "insertMath": "tilde",
    "insertCode": "sym.tilde"
  },
  {
    "name": "tilde.basic",
    "base": "tilde",
    "modifiers": [
      "basic"
    ],
    "char": "~",
    "insertMath": "tilde.basic",
    "insertCode": "sym.tilde.basic"
  },
  {
    "name": "tilde.dot",
    "base": "tilde",
    "modifiers": [
      "dot"
    ],
    "char": "⩪",
    "insertMath": "tilde.dot",
    "insertCode": "sym.tilde.dot"
  },
  {
    "name": "tilde.eq",
    "base": "tilde",
    "modifiers": [
      "eq"
    ],
    "char": "≃",
    "insertMath": "tilde.eq",
    "insertCode": "sym.tilde.eq"
  },
  {
    "name": "tilde.eq.not",
    "base": "tilde",
    "modifiers": [
      "eq",
      "not"
    ],
    "char": "≄",
    "insertMath": "tilde.eq.not",
    "insertCode": "sym.tilde.eq.not"
  },
  {
    "name": "tilde.eq.rev",
    "base": "tilde",
    "modifiers": [
      "eq",
      "rev"
    ],
    "char": "⋍",
    "insertMath": "tilde.eq.rev",
    "insertCode": "sym.tilde.eq.rev"
  },
  {
    "name": "tilde.equiv",
    "base": "tilde",
    "modifiers": [
      "equiv"
    ],
    "char": "≅",
    "insertMath": "tilde.equiv",
    "insertCode": "sym.tilde.equiv"
  },
  {
    "name": "tilde.equiv.not",
    "base": "tilde",
    "modifiers": [
      "equiv",
      "not"
    ],
    "char": "≇",
    "insertMath": "tilde.equiv.not",
    "insertCode": "sym.tilde.equiv.not"
  },
  {
    "name": "tilde.nequiv",
    "base": "tilde",
    "modifiers": [
      "nequiv"
    ],
    "char": "≆",
    "insertMath": "tilde.nequiv",
    "insertCode": "sym.tilde.nequiv"
  },
  {
    "name": "tilde.not",
    "base": "tilde",
    "modifiers": [
      "not"
    ],
    "char": "≁",
    "insertMath": "tilde.not",
    "insertCode": "sym.tilde.not"
  },
  {
    "name": "tilde.rev",
    "base": "tilde",
    "modifiers": [
      "rev"
    ],
    "char": "∽",
    "insertMath": "tilde.rev",
    "insertCode": "sym.tilde.rev"
  },
  {
    "name": "tilde.rev.equiv",
    "base": "tilde",
    "modifiers": [
      "rev",
      "equiv"
    ],
    "char": "≌",
    "insertMath": "tilde.rev.equiv",
    "insertCode": "sym.tilde.rev.equiv"
  },
  {
    "name": "tilde.triple",
    "base": "tilde",
    "modifiers": [
      "triple"
    ],
    "char": "≋",
    "insertMath": "tilde.triple",
    "insertCode": "sym.tilde.triple"
  },
  {
    "name": "acute",
    "base": "acute",
    "modifiers": [],
    "char": "´",
    "insertMath": "acute",
    "insertCode": "sym.acute"
  },
  {
    "name": "acute.double",
    "base": "acute",
    "modifiers": [
      "double"
    ],
    "char": "˝",
    "insertMath": "acute.double",
    "insertCode": "sym.acute.double"
  },
  {
    "name": "breve",
    "base": "breve",
    "modifiers": [],
    "char": "˘",
    "insertMath": "breve",
    "insertCode": "sym.breve"
  },
  {
    "name": "caret",
    "base": "caret",
    "modifiers": [],
    "char": "‸",
    "insertMath": "caret",
    "insertCode": "sym.caret"
  },
  {
    "name": "caron",
    "base": "caron",
    "modifiers": [],
    "char": "ˇ",
    "insertMath": "caron",
    "insertCode": "sym.caron"
  },
  {
    "name": "hat",
    "base": "hat",
    "modifiers": [],
    "char": "^",
    "insertMath": "hat",
    "insertCode": "sym.hat"
  },
  {
    "name": "diaer",
    "base": "diaer",
    "modifiers": [],
    "char": "¨",
    "insertMath": "diaer",
    "insertCode": "sym.diaer"
  },
  {
    "name": "grave",
    "base": "grave",
    "modifiers": [],
    "char": "`",
    "insertMath": "grave",
    "insertCode": "sym.grave"
  },
  {
    "name": "macron",
    "base": "macron",
    "modifiers": [],
    "char": "¯",
    "insertMath": "macron",
    "insertCode": "sym.macron"
  },
  {
    "name": "quote.double",
    "base": "quote",
    "modifiers": [
      "double"
    ],
    "char": "\"",
    "insertMath": "quote.double",
    "insertCode": "sym.quote.double"
  },
  {
    "name": "quote",
    "base": "quote",
    "modifiers": [],
    "char": "\"",
    "insertMath": "quote",
    "insertCode": "sym.quote"
  },
  {
    "name": "quote.single",
    "base": "quote",
    "modifiers": [
      "single"
    ],
    "char": "'",
    "insertMath": "quote.single",
    "insertCode": "sym.quote.single"
  },
  {
    "name": "quote.l.double",
    "base": "quote",
    "modifiers": [
      "l",
      "double"
    ],
    "char": "“",
    "insertMath": "quote.l.double",
    "insertCode": "sym.quote.l.double"
  },
  {
    "name": "quote.l.single",
    "base": "quote",
    "modifiers": [
      "l",
      "single"
    ],
    "char": "‘",
    "insertMath": "quote.l.single",
    "insertCode": "sym.quote.l.single"
  },
  {
    "name": "quote.r.double",
    "base": "quote",
    "modifiers": [
      "r",
      "double"
    ],
    "char": "”",
    "insertMath": "quote.r.double",
    "insertCode": "sym.quote.r.double"
  },
  {
    "name": "quote.r.single",
    "base": "quote",
    "modifiers": [
      "r",
      "single"
    ],
    "char": "’",
    "insertMath": "quote.r.single",
    "insertCode": "sym.quote.r.single"
  },
  {
    "name": "quote.chevron.l.double",
    "base": "quote",
    "modifiers": [
      "chevron",
      "l",
      "double"
    ],
    "char": "«",
    "insertMath": "quote.chevron.l.double",
    "insertCode": "sym.quote.chevron.l.double"
  },
  {
    "name": "quote.chevron.l.single",
    "base": "quote",
    "modifiers": [
      "chevron",
      "l",
      "single"
    ],
    "char": "‹",
    "insertMath": "quote.chevron.l.single",
    "insertCode": "sym.quote.chevron.l.single"
  },
  {
    "name": "quote.chevron.r.double",
    "base": "quote",
    "modifiers": [
      "chevron",
      "r",
      "double"
    ],
    "char": "»",
    "insertMath": "quote.chevron.r.double",
    "insertCode": "sym.quote.chevron.r.double"
  },
  {
    "name": "quote.chevron.r.single",
    "base": "quote",
    "modifiers": [
      "chevron",
      "r",
      "single"
    ],
    "char": "›",
    "insertMath": "quote.chevron.r.single",
    "insertCode": "sym.quote.chevron.r.single"
  },
  {
    "name": "quote.high.double",
    "base": "quote",
    "modifiers": [
      "high",
      "double"
    ],
    "char": "‟",
    "insertMath": "quote.high.double",
    "insertCode": "sym.quote.high.double"
  },
  {
    "name": "quote.high.single",
    "base": "quote",
    "modifiers": [
      "high",
      "single"
    ],
    "char": "‛",
    "insertMath": "quote.high.single",
    "insertCode": "sym.quote.high.single"
  },
  {
    "name": "quote.low.double",
    "base": "quote",
    "modifiers": [
      "low",
      "double"
    ],
    "char": "„",
    "insertMath": "quote.low.double",
    "insertCode": "sym.quote.low.double"
  },
  {
    "name": "quote.low.single",
    "base": "quote",
    "modifiers": [
      "low",
      "single"
    ],
    "char": "‚",
    "insertMath": "quote.low.single",
    "insertCode": "sym.quote.low.single"
  },
  {
    "name": "prime",
    "base": "prime",
    "modifiers": [],
    "char": "′",
    "insertMath": "prime",
    "insertCode": "sym.prime"
  },
  {
    "name": "prime.rev",
    "base": "prime",
    "modifiers": [
      "rev"
    ],
    "char": "‵",
    "insertMath": "prime.rev",
    "insertCode": "sym.prime.rev"
  },
  {
    "name": "prime.double",
    "base": "prime",
    "modifiers": [
      "double"
    ],
    "char": "″",
    "insertMath": "prime.double",
    "insertCode": "sym.prime.double"
  },
  {
    "name": "prime.double.rev",
    "base": "prime",
    "modifiers": [
      "double",
      "rev"
    ],
    "char": "‶",
    "insertMath": "prime.double.rev",
    "insertCode": "sym.prime.double.rev"
  },
  {
    "name": "prime.triple",
    "base": "prime",
    "modifiers": [
      "triple"
    ],
    "char": "‴",
    "insertMath": "prime.triple",
    "insertCode": "sym.prime.triple"
  },
  {
    "name": "prime.triple.rev",
    "base": "prime",
    "modifiers": [
      "triple",
      "rev"
    ],
    "char": "‷",
    "insertMath": "prime.triple.rev",
    "insertCode": "sym.prime.triple.rev"
  },
  {
    "name": "prime.quad",
    "base": "prime",
    "modifiers": [
      "quad"
    ],
    "char": "⁗",
    "insertMath": "prime.quad",
    "insertCode": "sym.prime.quad"
  },
  {
    "name": "plus",
    "base": "plus",
    "modifiers": [],
    "char": "+",
    "insertMath": "plus",
    "insertCode": "sym.plus"
  },
  {
    "name": "plus.o",
    "base": "plus",
    "modifiers": [
      "o"
    ],
    "char": "⊕",
    "insertMath": "plus.o",
    "insertCode": "sym.plus.o"
  },
  {
    "name": "plus.o.l",
    "base": "plus",
    "modifiers": [
      "o",
      "l"
    ],
    "char": "⨭",
    "insertMath": "plus.o.l",
    "insertCode": "sym.plus.o.l"
  },
  {
    "name": "plus.o.r",
    "base": "plus",
    "modifiers": [
      "o",
      "r"
    ],
    "char": "⨮",
    "insertMath": "plus.o.r",
    "insertCode": "sym.plus.o.r"
  },
  {
    "name": "plus.o.arrow",
    "base": "plus",
    "modifiers": [
      "o",
      "arrow"
    ],
    "char": "⟴",
    "insertMath": "plus.o.arrow",
    "insertCode": "sym.plus.o.arrow"
  },
  {
    "name": "plus.o.big",
    "base": "plus",
    "modifiers": [
      "o",
      "big"
    ],
    "char": "⨁",
    "insertMath": "plus.o.big",
    "insertCode": "sym.plus.o.big"
  },
  {
    "name": "plus.dot",
    "base": "plus",
    "modifiers": [
      "dot"
    ],
    "char": "∔",
    "insertMath": "plus.dot",
    "insertCode": "sym.plus.dot"
  },
  {
    "name": "plus.double",
    "base": "plus",
    "modifiers": [
      "double"
    ],
    "char": "⧺",
    "insertMath": "plus.double",
    "insertCode": "sym.plus.double"
  },
  {
    "name": "plus.minus",
    "base": "plus",
    "modifiers": [
      "minus"
    ],
    "char": "±",
    "insertMath": "plus.minus",
    "insertCode": "sym.plus.minus"
  },
  {
    "name": "plus.square",
    "base": "plus",
    "modifiers": [
      "square"
    ],
    "char": "⊞",
    "insertMath": "plus.square",
    "insertCode": "sym.plus.square"
  },
  {
    "name": "plus.triangle",
    "base": "plus",
    "modifiers": [
      "triangle"
    ],
    "char": "⨹",
    "insertMath": "plus.triangle",
    "insertCode": "sym.plus.triangle"
  },
  {
    "name": "plus.triple",
    "base": "plus",
    "modifiers": [
      "triple"
    ],
    "char": "⧻",
    "insertMath": "plus.triple",
    "insertCode": "sym.plus.triple"
  },
  {
    "name": "minus",
    "base": "minus",
    "modifiers": [],
    "char": "−",
    "insertMath": "minus",
    "insertCode": "sym.minus"
  },
  {
    "name": "minus.o",
    "base": "minus",
    "modifiers": [
      "o"
    ],
    "char": "⊖",
    "insertMath": "minus.o",
    "insertCode": "sym.minus.o"
  },
  {
    "name": "minus.dot",
    "base": "minus",
    "modifiers": [
      "dot"
    ],
    "char": "∸",
    "insertMath": "minus.dot",
    "insertCode": "sym.minus.dot"
  },
  {
    "name": "minus.plus",
    "base": "minus",
    "modifiers": [
      "plus"
    ],
    "char": "∓",
    "insertMath": "minus.plus",
    "insertCode": "sym.minus.plus"
  },
  {
    "name": "minus.square",
    "base": "minus",
    "modifiers": [
      "square"
    ],
    "char": "⊟",
    "insertMath": "minus.square",
    "insertCode": "sym.minus.square"
  },
  {
    "name": "minus.tilde",
    "base": "minus",
    "modifiers": [
      "tilde"
    ],
    "char": "≂",
    "insertMath": "minus.tilde",
    "insertCode": "sym.minus.tilde"
  },
  {
    "name": "minus.triangle",
    "base": "minus",
    "modifiers": [
      "triangle"
    ],
    "char": "⨺",
    "insertMath": "minus.triangle",
    "insertCode": "sym.minus.triangle"
  },
  {
    "name": "div",
    "base": "div",
    "modifiers": [],
    "char": "÷",
    "insertMath": "div",
    "insertCode": "sym.div"
  },
  {
    "name": "div.o",
    "base": "div",
    "modifiers": [
      "o"
    ],
    "char": "⨸",
    "insertMath": "div.o",
    "insertCode": "sym.div.o"
  },
  {
    "name": "div.slanted.o",
    "base": "div",
    "modifiers": [
      "slanted",
      "o"
    ],
    "char": "⦼",
    "insertMath": "div.slanted.o",
    "insertCode": "sym.div.slanted.o"
  },
  {
    "name": "times",
    "base": "times",
    "modifiers": [],
    "char": "×",
    "insertMath": "times",
    "insertCode": "sym.times"
  },
  {
    "name": "times.big",
    "base": "times",
    "modifiers": [
      "big"
    ],
    "char": "⨉",
    "insertMath": "times.big",
    "insertCode": "sym.times.big"
  },
  {
    "name": "times.o",
    "base": "times",
    "modifiers": [
      "o"
    ],
    "char": "⊗",
    "insertMath": "times.o",
    "insertCode": "sym.times.o"
  },
  {
    "name": "times.o.l",
    "base": "times",
    "modifiers": [
      "o",
      "l"
    ],
    "char": "⨴",
    "insertMath": "times.o.l",
    "insertCode": "sym.times.o.l"
  },
  {
    "name": "times.o.r",
    "base": "times",
    "modifiers": [
      "o",
      "r"
    ],
    "char": "⨵",
    "insertMath": "times.o.r",
    "insertCode": "sym.times.o.r"
  },
  {
    "name": "times.o.hat",
    "base": "times",
    "modifiers": [
      "o",
      "hat"
    ],
    "char": "⨶",
    "insertMath": "times.o.hat",
    "insertCode": "sym.times.o.hat"
  },
  {
    "name": "times.o.big",
    "base": "times",
    "modifiers": [
      "o",
      "big"
    ],
    "char": "⨂",
    "insertMath": "times.o.big",
    "insertCode": "sym.times.o.big"
  },
  {
    "name": "times.div",
    "base": "times",
    "modifiers": [
      "div"
    ],
    "char": "⋇",
    "insertMath": "times.div",
    "insertCode": "sym.times.div"
  },
  {
    "name": "times.three.l",
    "base": "times",
    "modifiers": [
      "three",
      "l"
    ],
    "char": "⋋",
    "insertMath": "times.three.l",
    "insertCode": "sym.times.three.l"
  },
  {
    "name": "times.three.r",
    "base": "times",
    "modifiers": [
      "three",
      "r"
    ],
    "char": "⋌",
    "insertMath": "times.three.r",
    "insertCode": "sym.times.three.r"
  },
  {
    "name": "times.l",
    "base": "times",
    "modifiers": [
      "l"
    ],
    "char": "⋉",
    "insertMath": "times.l",
    "insertCode": "sym.times.l"
  },
  {
    "name": "times.r",
    "base": "times",
    "modifiers": [
      "r"
    ],
    "char": "⋊",
    "insertMath": "times.r",
    "insertCode": "sym.times.r"
  },
  {
    "name": "times.square",
    "base": "times",
    "modifiers": [
      "square"
    ],
    "char": "⊠",
    "insertMath": "times.square",
    "insertCode": "sym.times.square"
  },
  {
    "name": "times.triangle",
    "base": "times",
    "modifiers": [
      "triangle"
    ],
    "char": "⨻",
    "insertMath": "times.triangle",
    "insertCode": "sym.times.triangle"
  },
  {
    "name": "ratio",
    "base": "ratio",
    "modifiers": [],
    "char": "∶",
    "insertMath": "ratio",
    "insertCode": "sym.ratio"
  },
  {
    "name": "eq",
    "base": "eq",
    "modifiers": [],
    "char": "=",
    "insertMath": "eq",
    "insertCode": "sym.eq"
  },
  {
    "name": "eq.star",
    "base": "eq",
    "modifiers": [
      "star"
    ],
    "char": "≛",
    "insertMath": "eq.star",
    "insertCode": "sym.eq.star"
  },
  {
    "name": "eq.o",
    "base": "eq",
    "modifiers": [
      "o"
    ],
    "char": "⊜",
    "insertMath": "eq.o",
    "insertCode": "sym.eq.o"
  },
  {
    "name": "eq.colon",
    "base": "eq",
    "modifiers": [
      "colon"
    ],
    "char": "≕",
    "insertMath": "eq.colon",
    "insertCode": "sym.eq.colon"
  },
  {
    "name": "eq.dots",
    "base": "eq",
    "modifiers": [
      "dots"
    ],
    "char": "≑",
    "insertMath": "eq.dots",
    "insertCode": "sym.eq.dots"
  },
  {
    "name": "eq.dots.down",
    "base": "eq",
    "modifiers": [
      "dots",
      "down"
    ],
    "char": "≒",
    "insertMath": "eq.dots.down",
    "insertCode": "sym.eq.dots.down"
  },
  {
    "name": "eq.dots.up",
    "base": "eq",
    "modifiers": [
      "dots",
      "up"
    ],
    "char": "≓",
    "insertMath": "eq.dots.up",
    "insertCode": "sym.eq.dots.up"
  },
  {
    "name": "eq.def",
    "base": "eq",
    "modifiers": [
      "def"
    ],
    "char": "≝",
    "insertMath": "eq.def",
    "insertCode": "sym.eq.def"
  },
  {
    "name": "eq.delta",
    "base": "eq",
    "modifiers": [
      "delta"
    ],
    "char": "≜",
    "insertMath": "eq.delta",
    "insertCode": "sym.eq.delta"
  },
  {
    "name": "eq.equi",
    "base": "eq",
    "modifiers": [
      "equi"
    ],
    "char": "≚",
    "insertMath": "eq.equi",
    "insertCode": "sym.eq.equi"
  },
  {
    "name": "eq.est",
    "base": "eq",
    "modifiers": [
      "est"
    ],
    "char": "≙",
    "insertMath": "eq.est",
    "insertCode": "sym.eq.est"
  },
  {
    "name": "eq.gt",
    "base": "eq",
    "modifiers": [
      "gt"
    ],
    "char": "⋝",
    "insertMath": "eq.gt",
    "insertCode": "sym.eq.gt"
  },
  {
    "name": "eq.lt",
    "base": "eq",
    "modifiers": [
      "lt"
    ],
    "char": "⋜",
    "insertMath": "eq.lt",
    "insertCode": "sym.eq.lt"
  },
  {
    "name": "eq.m",
    "base": "eq",
    "modifiers": [
      "m"
    ],
    "char": "≞",
    "insertMath": "eq.m",
    "insertCode": "sym.eq.m"
  },
  {
    "name": "eq.not",
    "base": "eq",
    "modifiers": [
      "not"
    ],
    "char": "≠",
    "insertMath": "eq.not",
    "insertCode": "sym.eq.not"
  },
  {
    "name": "eq.prec",
    "base": "eq",
    "modifiers": [
      "prec"
    ],
    "char": "⋞",
    "insertMath": "eq.prec",
    "insertCode": "sym.eq.prec"
  },
  {
    "name": "eq.quest",
    "base": "eq",
    "modifiers": [
      "quest"
    ],
    "char": "≟",
    "insertMath": "eq.quest",
    "insertCode": "sym.eq.quest"
  },
  {
    "name": "eq.succ",
    "base": "eq",
    "modifiers": [
      "succ"
    ],
    "char": "⋟",
    "insertMath": "eq.succ",
    "insertCode": "sym.eq.succ"
  },
  {
    "name": "eq.triple",
    "base": "eq",
    "modifiers": [
      "triple"
    ],
    "char": "≡",
    "insertMath": "eq.triple",
    "insertCode": "sym.eq.triple"
  },
  {
    "name": "eq.triple.not",
    "base": "eq",
    "modifiers": [
      "triple",
      "not"
    ],
    "char": "≢",
    "insertMath": "eq.triple.not",
    "insertCode": "sym.eq.triple.not"
  },
  {
    "name": "eq.quad",
    "base": "eq",
    "modifiers": [
      "quad"
    ],
    "char": "≣",
    "insertMath": "eq.quad",
    "insertCode": "sym.eq.quad"
  },
  {
    "name": "gt",
    "base": "gt",
    "modifiers": [],
    "char": ">",
    "insertMath": "gt",
    "insertCode": "sym.gt"
  },
  {
    "name": "gt.o",
    "base": "gt",
    "modifiers": [
      "o"
    ],
    "char": "⧁",
    "insertMath": "gt.o",
    "insertCode": "sym.gt.o"
  },
  {
    "name": "gt.dot",
    "base": "gt",
    "modifiers": [
      "dot"
    ],
    "char": "⋗",
    "insertMath": "gt.dot",
    "insertCode": "sym.gt.dot"
  },
  {
    "name": "gt.approx",
    "base": "gt",
    "modifiers": [
      "approx"
    ],
    "char": "⪆",
    "insertMath": "gt.approx",
    "insertCode": "sym.gt.approx"
  },
  {
    "name": "gt.arc",
    "base": "gt",
    "modifiers": [
      "arc"
    ],
    "char": "⪧",
    "insertMath": "gt.arc",
    "insertCode": "sym.gt.arc"
  },
  {
    "name": "gt.arc.eq",
    "base": "gt",
    "modifiers": [
      "arc",
      "eq"
    ],
    "char": "⪩",
    "insertMath": "gt.arc.eq",
    "insertCode": "sym.gt.arc.eq"
  },
  {
    "name": "gt.closed",
    "base": "gt",
    "modifiers": [
      "closed"
    ],
    "char": "⊳",
    "insertMath": "gt.closed",
    "insertCode": "sym.gt.closed"
  },
  {
    "name": "gt.closed.eq",
    "base": "gt",
    "modifiers": [
      "closed",
      "eq"
    ],
    "char": "⊵",
    "insertMath": "gt.closed.eq",
    "insertCode": "sym.gt.closed.eq"
  },
  {
    "name": "gt.closed.eq.not",
    "base": "gt",
    "modifiers": [
      "closed",
      "eq",
      "not"
    ],
    "char": "⋭",
    "insertMath": "gt.closed.eq.not",
    "insertCode": "sym.gt.closed.eq.not"
  },
  {
    "name": "gt.closed.not",
    "base": "gt",
    "modifiers": [
      "closed",
      "not"
    ],
    "char": "⋫",
    "insertMath": "gt.closed.not",
    "insertCode": "sym.gt.closed.not"
  },
  {
    "name": "gt.double",
    "base": "gt",
    "modifiers": [
      "double"
    ],
    "char": "≫",
    "insertMath": "gt.double",
    "insertCode": "sym.gt.double"
  },
  {
    "name": "gt.double.nested",
    "base": "gt",
    "modifiers": [
      "double",
      "nested"
    ],
    "char": "⪢",
    "insertMath": "gt.double.nested",
    "insertCode": "sym.gt.double.nested"
  },
  {
    "name": "gt.eq",
    "base": "gt",
    "modifiers": [
      "eq"
    ],
    "char": "≥",
    "insertMath": "gt.eq",
    "insertCode": "sym.gt.eq"
  },
  {
    "name": "gt.eq.slant",
    "base": "gt",
    "modifiers": [
      "eq",
      "slant"
    ],
    "char": "⩾",
    "insertMath": "gt.eq.slant",
    "insertCode": "sym.gt.eq.slant"
  },
  {
    "name": "gt.eq.lt",
    "base": "gt",
    "modifiers": [
      "eq",
      "lt"
    ],
    "char": "⋛",
    "insertMath": "gt.eq.lt",
    "insertCode": "sym.gt.eq.lt"
  },
  {
    "name": "gt.eq.not",
    "base": "gt",
    "modifiers": [
      "eq",
      "not"
    ],
    "char": "≱",
    "insertMath": "gt.eq.not",
    "insertCode": "sym.gt.eq.not"
  },
  {
    "name": "gt.equiv",
    "base": "gt",
    "modifiers": [
      "equiv"
    ],
    "char": "≧",
    "insertMath": "gt.equiv",
    "insertCode": "sym.gt.equiv"
  },
  {
    "name": "gt.lt",
    "base": "gt",
    "modifiers": [
      "lt"
    ],
    "char": "≷",
    "insertMath": "gt.lt",
    "insertCode": "sym.gt.lt"
  },
  {
    "name": "gt.lt.not",
    "base": "gt",
    "modifiers": [
      "lt",
      "not"
    ],
    "char": "≹",
    "insertMath": "gt.lt.not",
    "insertCode": "sym.gt.lt.not"
  },
  {
    "name": "gt.neq",
    "base": "gt",
    "modifiers": [
      "neq"
    ],
    "char": "⪈",
    "insertMath": "gt.neq",
    "insertCode": "sym.gt.neq"
  },
  {
    "name": "gt.napprox",
    "base": "gt",
    "modifiers": [
      "napprox"
    ],
    "char": "⪊",
    "insertMath": "gt.napprox",
    "insertCode": "sym.gt.napprox"
  },
  {
    "name": "gt.nequiv",
    "base": "gt",
    "modifiers": [
      "nequiv"
    ],
    "char": "≩",
    "insertMath": "gt.nequiv",
    "insertCode": "sym.gt.nequiv"
  },
  {
    "name": "gt.not",
    "base": "gt",
    "modifiers": [
      "not"
    ],
    "char": "≯",
    "insertMath": "gt.not",
    "insertCode": "sym.gt.not"
  },
  {
    "name": "gt.ntilde",
    "base": "gt",
    "modifiers": [
      "ntilde"
    ],
    "char": "⋧",
    "insertMath": "gt.ntilde",
    "insertCode": "sym.gt.ntilde"
  },
  {
    "name": "gt.tilde",
    "base": "gt",
    "modifiers": [
      "tilde"
    ],
    "char": "≳",
    "insertMath": "gt.tilde",
    "insertCode": "sym.gt.tilde"
  },
  {
    "name": "gt.tilde.not",
    "base": "gt",
    "modifiers": [
      "tilde",
      "not"
    ],
    "char": "≵",
    "insertMath": "gt.tilde.not",
    "insertCode": "sym.gt.tilde.not"
  },
  {
    "name": "gt.triple",
    "base": "gt",
    "modifiers": [
      "triple"
    ],
    "char": "⋙",
    "insertMath": "gt.triple",
    "insertCode": "sym.gt.triple"
  },
  {
    "name": "gt.triple.nested",
    "base": "gt",
    "modifiers": [
      "triple",
      "nested"
    ],
    "char": "⫸",
    "insertMath": "gt.triple.nested",
    "insertCode": "sym.gt.triple.nested"
  },
  {
    "name": "lt",
    "base": "lt",
    "modifiers": [],
    "char": "<",
    "insertMath": "lt",
    "insertCode": "sym.lt"
  },
  {
    "name": "lt.o",
    "base": "lt",
    "modifiers": [
      "o"
    ],
    "char": "⧀",
    "insertMath": "lt.o",
    "insertCode": "sym.lt.o"
  },
  {
    "name": "lt.dot",
    "base": "lt",
    "modifiers": [
      "dot"
    ],
    "char": "⋖",
    "insertMath": "lt.dot",
    "insertCode": "sym.lt.dot"
  },
  {
    "name": "lt.approx",
    "base": "lt",
    "modifiers": [
      "approx"
    ],
    "char": "⪅",
    "insertMath": "lt.approx",
    "insertCode": "sym.lt.approx"
  },
  {
    "name": "lt.arc",
    "base": "lt",
    "modifiers": [
      "arc"
    ],
    "char": "⪦",
    "insertMath": "lt.arc",
    "insertCode": "sym.lt.arc"
  },
  {
    "name": "lt.arc.eq",
    "base": "lt",
    "modifiers": [
      "arc",
      "eq"
    ],
    "char": "⪨",
    "insertMath": "lt.arc.eq",
    "insertCode": "sym.lt.arc.eq"
  },
  {
    "name": "lt.closed",
    "base": "lt",
    "modifiers": [
      "closed"
    ],
    "char": "⊲",
    "insertMath": "lt.closed",
    "insertCode": "sym.lt.closed"
  },
  {
    "name": "lt.closed.eq",
    "base": "lt",
    "modifiers": [
      "closed",
      "eq"
    ],
    "char": "⊴",
    "insertMath": "lt.closed.eq",
    "insertCode": "sym.lt.closed.eq"
  },
  {
    "name": "lt.closed.eq.not",
    "base": "lt",
    "modifiers": [
      "closed",
      "eq",
      "not"
    ],
    "char": "⋬",
    "insertMath": "lt.closed.eq.not",
    "insertCode": "sym.lt.closed.eq.not"
  },
  {
    "name": "lt.closed.not",
    "base": "lt",
    "modifiers": [
      "closed",
      "not"
    ],
    "char": "⋪",
    "insertMath": "lt.closed.not",
    "insertCode": "sym.lt.closed.not"
  },
  {
    "name": "lt.double",
    "base": "lt",
    "modifiers": [
      "double"
    ],
    "char": "≪",
    "insertMath": "lt.double",
    "insertCode": "sym.lt.double"
  },
  {
    "name": "lt.double.nested",
    "base": "lt",
    "modifiers": [
      "double",
      "nested"
    ],
    "char": "⪡",
    "insertMath": "lt.double.nested",
    "insertCode": "sym.lt.double.nested"
  },
  {
    "name": "lt.eq",
    "base": "lt",
    "modifiers": [
      "eq"
    ],
    "char": "≤",
    "insertMath": "lt.eq",
    "insertCode": "sym.lt.eq"
  },
  {
    "name": "lt.eq.slant",
    "base": "lt",
    "modifiers": [
      "eq",
      "slant"
    ],
    "char": "⩽",
    "insertMath": "lt.eq.slant",
    "insertCode": "sym.lt.eq.slant"
  },
  {
    "name": "lt.eq.gt",
    "base": "lt",
    "modifiers": [
      "eq",
      "gt"
    ],
    "char": "⋚",
    "insertMath": "lt.eq.gt",
    "insertCode": "sym.lt.eq.gt"
  },
  {
    "name": "lt.eq.not",
    "base": "lt",
    "modifiers": [
      "eq",
      "not"
    ],
    "char": "≰",
    "insertMath": "lt.eq.not",
    "insertCode": "sym.lt.eq.not"
  },
  {
    "name": "lt.equiv",
    "base": "lt",
    "modifiers": [
      "equiv"
    ],
    "char": "≦",
    "insertMath": "lt.equiv",
    "insertCode": "sym.lt.equiv"
  },
  {
    "name": "lt.gt",
    "base": "lt",
    "modifiers": [
      "gt"
    ],
    "char": "≶",
    "insertMath": "lt.gt",
    "insertCode": "sym.lt.gt"
  },
  {
    "name": "lt.gt.not",
    "base": "lt",
    "modifiers": [
      "gt",
      "not"
    ],
    "char": "≸",
    "insertMath": "lt.gt.not",
    "insertCode": "sym.lt.gt.not"
  },
  {
    "name": "lt.neq",
    "base": "lt",
    "modifiers": [
      "neq"
    ],
    "char": "⪇",
    "insertMath": "lt.neq",
    "insertCode": "sym.lt.neq"
  },
  {
    "name": "lt.napprox",
    "base": "lt",
    "modifiers": [
      "napprox"
    ],
    "char": "⪉",
    "insertMath": "lt.napprox",
    "insertCode": "sym.lt.napprox"
  },
  {
    "name": "lt.nequiv",
    "base": "lt",
    "modifiers": [
      "nequiv"
    ],
    "char": "≨",
    "insertMath": "lt.nequiv",
    "insertCode": "sym.lt.nequiv"
  },
  {
    "name": "lt.not",
    "base": "lt",
    "modifiers": [
      "not"
    ],
    "char": "≮",
    "insertMath": "lt.not",
    "insertCode": "sym.lt.not"
  },
  {
    "name": "lt.ntilde",
    "base": "lt",
    "modifiers": [
      "ntilde"
    ],
    "char": "⋦",
    "insertMath": "lt.ntilde",
    "insertCode": "sym.lt.ntilde"
  },
  {
    "name": "lt.tilde",
    "base": "lt",
    "modifiers": [
      "tilde"
    ],
    "char": "≲",
    "insertMath": "lt.tilde",
    "insertCode": "sym.lt.tilde"
  },
  {
    "name": "lt.tilde.not",
    "base": "lt",
    "modifiers": [
      "tilde",
      "not"
    ],
    "char": "≴",
    "insertMath": "lt.tilde.not",
    "insertCode": "sym.lt.tilde.not"
  },
  {
    "name": "lt.triple",
    "base": "lt",
    "modifiers": [
      "triple"
    ],
    "char": "⋘",
    "insertMath": "lt.triple",
    "insertCode": "sym.lt.triple"
  },
  {
    "name": "lt.triple.nested",
    "base": "lt",
    "modifiers": [
      "triple",
      "nested"
    ],
    "char": "⫷",
    "insertMath": "lt.triple.nested",
    "insertCode": "sym.lt.triple.nested"
  },
  {
    "name": "approx",
    "base": "approx",
    "modifiers": [],
    "char": "≈",
    "insertMath": "approx",
    "insertCode": "sym.approx"
  },
  {
    "name": "approx.eq",
    "base": "approx",
    "modifiers": [
      "eq"
    ],
    "char": "≊",
    "insertMath": "approx.eq",
    "insertCode": "sym.approx.eq"
  },
  {
    "name": "approx.not",
    "base": "approx",
    "modifiers": [
      "not"
    ],
    "char": "≉",
    "insertMath": "approx.not",
    "insertCode": "sym.approx.not"
  },
  {
    "name": "prec",
    "base": "prec",
    "modifiers": [],
    "char": "≺",
    "insertMath": "prec",
    "insertCode": "sym.prec"
  },
  {
    "name": "prec.approx",
    "base": "prec",
    "modifiers": [
      "approx"
    ],
    "char": "⪷",
    "insertMath": "prec.approx",
    "insertCode": "sym.prec.approx"
  },
  {
    "name": "prec.curly.eq",
    "base": "prec",
    "modifiers": [
      "curly",
      "eq"
    ],
    "char": "≼",
    "insertMath": "prec.curly.eq",
    "insertCode": "sym.prec.curly.eq"
  },
  {
    "name": "prec.curly.eq.not",
    "base": "prec",
    "modifiers": [
      "curly",
      "eq",
      "not"
    ],
    "char": "⋠",
    "insertMath": "prec.curly.eq.not",
    "insertCode": "sym.prec.curly.eq.not"
  },
  {
    "name": "prec.double",
    "base": "prec",
    "modifiers": [
      "double"
    ],
    "char": "⪻",
    "insertMath": "prec.double",
    "insertCode": "sym.prec.double"
  },
  {
    "name": "prec.eq",
    "base": "prec",
    "modifiers": [
      "eq"
    ],
    "char": "⪯",
    "insertMath": "prec.eq",
    "insertCode": "sym.prec.eq"
  },
  {
    "name": "prec.equiv",
    "base": "prec",
    "modifiers": [
      "equiv"
    ],
    "char": "⪳",
    "insertMath": "prec.equiv",
    "insertCode": "sym.prec.equiv"
  },
  {
    "name": "prec.napprox",
    "base": "prec",
    "modifiers": [
      "napprox"
    ],
    "char": "⪹",
    "insertMath": "prec.napprox",
    "insertCode": "sym.prec.napprox"
  },
  {
    "name": "prec.neq",
    "base": "prec",
    "modifiers": [
      "neq"
    ],
    "char": "⪱",
    "insertMath": "prec.neq",
    "insertCode": "sym.prec.neq"
  },
  {
    "name": "prec.nequiv",
    "base": "prec",
    "modifiers": [
      "nequiv"
    ],
    "char": "⪵",
    "insertMath": "prec.nequiv",
    "insertCode": "sym.prec.nequiv"
  },
  {
    "name": "prec.not",
    "base": "prec",
    "modifiers": [
      "not"
    ],
    "char": "⊀",
    "insertMath": "prec.not",
    "insertCode": "sym.prec.not"
  },
  {
    "name": "prec.ntilde",
    "base": "prec",
    "modifiers": [
      "ntilde"
    ],
    "char": "⋨",
    "insertMath": "prec.ntilde",
    "insertCode": "sym.prec.ntilde"
  },
  {
    "name": "prec.tilde",
    "base": "prec",
    "modifiers": [
      "tilde"
    ],
    "char": "≾",
    "insertMath": "prec.tilde",
    "insertCode": "sym.prec.tilde"
  },
  {
    "name": "succ",
    "base": "succ",
    "modifiers": [],
    "char": "≻",
    "insertMath": "succ",
    "insertCode": "sym.succ"
  },
  {
    "name": "succ.approx",
    "base": "succ",
    "modifiers": [
      "approx"
    ],
    "char": "⪸",
    "insertMath": "succ.approx",
    "insertCode": "sym.succ.approx"
  },
  {
    "name": "succ.curly.eq",
    "base": "succ",
    "modifiers": [
      "curly",
      "eq"
    ],
    "char": "≽",
    "insertMath": "succ.curly.eq",
    "insertCode": "sym.succ.curly.eq"
  },
  {
    "name": "succ.curly.eq.not",
    "base": "succ",
    "modifiers": [
      "curly",
      "eq",
      "not"
    ],
    "char": "⋡",
    "insertMath": "succ.curly.eq.not",
    "insertCode": "sym.succ.curly.eq.not"
  },
  {
    "name": "succ.double",
    "base": "succ",
    "modifiers": [
      "double"
    ],
    "char": "⪼",
    "insertMath": "succ.double",
    "insertCode": "sym.succ.double"
  },
  {
    "name": "succ.eq",
    "base": "succ",
    "modifiers": [
      "eq"
    ],
    "char": "⪰",
    "insertMath": "succ.eq",
    "insertCode": "sym.succ.eq"
  },
  {
    "name": "succ.equiv",
    "base": "succ",
    "modifiers": [
      "equiv"
    ],
    "char": "⪴",
    "insertMath": "succ.equiv",
    "insertCode": "sym.succ.equiv"
  },
  {
    "name": "succ.napprox",
    "base": "succ",
    "modifiers": [
      "napprox"
    ],
    "char": "⪺",
    "insertMath": "succ.napprox",
    "insertCode": "sym.succ.napprox"
  },
  {
    "name": "succ.neq",
    "base": "succ",
    "modifiers": [
      "neq"
    ],
    "char": "⪲",
    "insertMath": "succ.neq",
    "insertCode": "sym.succ.neq"
  },
  {
    "name": "succ.nequiv",
    "base": "succ",
    "modifiers": [
      "nequiv"
    ],
    "char": "⪶",
    "insertMath": "succ.nequiv",
    "insertCode": "sym.succ.nequiv"
  },
  {
    "name": "succ.not",
    "base": "succ",
    "modifiers": [
      "not"
    ],
    "char": "⊁",
    "insertMath": "succ.not",
    "insertCode": "sym.succ.not"
  },
  {
    "name": "succ.ntilde",
    "base": "succ",
    "modifiers": [
      "ntilde"
    ],
    "char": "⋩",
    "insertMath": "succ.ntilde",
    "insertCode": "sym.succ.ntilde"
  },
  {
    "name": "succ.tilde",
    "base": "succ",
    "modifiers": [
      "tilde"
    ],
    "char": "≿",
    "insertMath": "succ.tilde",
    "insertCode": "sym.succ.tilde"
  },
  {
    "name": "equiv",
    "base": "equiv",
    "modifiers": [],
    "char": "≡",
    "insertMath": "equiv",
    "insertCode": "sym.equiv"
  },
  {
    "name": "equiv.not",
    "base": "equiv",
    "modifiers": [
      "not"
    ],
    "char": "≢",
    "insertMath": "equiv.not",
    "insertCode": "sym.equiv.not"
  },
  {
    "name": "smt",
    "base": "smt",
    "modifiers": [],
    "char": "⪪",
    "insertMath": "smt",
    "insertCode": "sym.smt"
  },
  {
    "name": "smt.eq",
    "base": "smt",
    "modifiers": [
      "eq"
    ],
    "char": "⪬",
    "insertMath": "smt.eq",
    "insertCode": "sym.smt.eq"
  },
  {
    "name": "lat",
    "base": "lat",
    "modifiers": [],
    "char": "⪫",
    "insertMath": "lat",
    "insertCode": "sym.lat"
  },
  {
    "name": "lat.eq",
    "base": "lat",
    "modifiers": [
      "eq"
    ],
    "char": "⪭",
    "insertMath": "lat.eq",
    "insertCode": "sym.lat.eq"
  },
  {
    "name": "prop",
    "base": "prop",
    "modifiers": [],
    "char": "∝",
    "insertMath": "prop",
    "insertCode": "sym.prop"
  },
  {
    "name": "original",
    "base": "original",
    "modifiers": [],
    "char": "⊶",
    "insertMath": "original",
    "insertCode": "sym.original"
  },
  {
    "name": "image",
    "base": "image",
    "modifiers": [],
    "char": "⊷",
    "insertMath": "image",
    "insertCode": "sym.image"
  },
  {
    "name": "asymp",
    "base": "asymp",
    "modifiers": [],
    "char": "≍",
    "insertMath": "asymp",
    "insertCode": "sym.asymp"
  },
  {
    "name": "asymp.not",
    "base": "asymp",
    "modifiers": [
      "not"
    ],
    "char": "≭",
    "insertMath": "asymp.not",
    "insertCode": "sym.asymp.not"
  },
  {
    "name": "emptyset",
    "base": "emptyset",
    "modifiers": [],
    "char": "∅",
    "insertMath": "emptyset",
    "insertCode": "sym.emptyset"
  },
  {
    "name": "emptyset.zero",
    "base": "emptyset",
    "modifiers": [
      "zero"
    ],
    "char": "∅︀",
    "insertMath": "emptyset.zero",
    "insertCode": "sym.emptyset.zero"
  },
  {
    "name": "emptyset.arrow.r",
    "base": "emptyset",
    "modifiers": [
      "arrow",
      "r"
    ],
    "char": "⦳",
    "insertMath": "emptyset.arrow.r",
    "insertCode": "sym.emptyset.arrow.r"
  },
  {
    "name": "emptyset.arrow.l",
    "base": "emptyset",
    "modifiers": [
      "arrow",
      "l"
    ],
    "char": "⦴",
    "insertMath": "emptyset.arrow.l",
    "insertCode": "sym.emptyset.arrow.l"
  },
  {
    "name": "emptyset.bar",
    "base": "emptyset",
    "modifiers": [
      "bar"
    ],
    "char": "⦱",
    "insertMath": "emptyset.bar",
    "insertCode": "sym.emptyset.bar"
  },
  {
    "name": "emptyset.circle",
    "base": "emptyset",
    "modifiers": [
      "circle"
    ],
    "char": "⦲",
    "insertMath": "emptyset.circle",
    "insertCode": "sym.emptyset.circle"
  },
  {
    "name": "emptyset.rev",
    "base": "emptyset",
    "modifiers": [
      "rev"
    ],
    "char": "⦰",
    "insertMath": "emptyset.rev",
    "insertCode": "sym.emptyset.rev"
  },
  {
    "name": "nothing",
    "base": "nothing",
    "modifiers": [],
    "char": "∅",
    "insertMath": "nothing",
    "insertCode": "sym.nothing"
  },
  {
    "name": "nothing.zero",
    "base": "nothing",
    "modifiers": [
      "zero"
    ],
    "char": "∅︀",
    "insertMath": "nothing.zero",
    "insertCode": "sym.nothing.zero"
  },
  {
    "name": "nothing.arrow.r",
    "base": "nothing",
    "modifiers": [
      "arrow",
      "r"
    ],
    "char": "⦳",
    "insertMath": "nothing.arrow.r",
    "insertCode": "sym.nothing.arrow.r"
  },
  {
    "name": "nothing.arrow.l",
    "base": "nothing",
    "modifiers": [
      "arrow",
      "l"
    ],
    "char": "⦴",
    "insertMath": "nothing.arrow.l",
    "insertCode": "sym.nothing.arrow.l"
  },
  {
    "name": "nothing.bar",
    "base": "nothing",
    "modifiers": [
      "bar"
    ],
    "char": "⦱",
    "insertMath": "nothing.bar",
    "insertCode": "sym.nothing.bar"
  },
  {
    "name": "nothing.circle",
    "base": "nothing",
    "modifiers": [
      "circle"
    ],
    "char": "⦲",
    "insertMath": "nothing.circle",
    "insertCode": "sym.nothing.circle"
  },
  {
    "name": "nothing.rev",
    "base": "nothing",
    "modifiers": [
      "rev"
    ],
    "char": "⦰",
    "insertMath": "nothing.rev",
    "insertCode": "sym.nothing.rev"
  },
  {
    "name": "without",
    "base": "without",
    "modifiers": [],
    "char": "∖",
    "insertMath": "without",
    "insertCode": "sym.without"
  },
  {
    "name": "complement",
    "base": "complement",
    "modifiers": [],
    "char": "∁",
    "insertMath": "complement",
    "insertCode": "sym.complement"
  },
  {
    "name": "in",
    "base": "in",
    "modifiers": [],
    "char": "∈",
    "insertMath": "in",
    "insertCode": "sym.in"
  },
  {
    "name": "in.not",
    "base": "in",
    "modifiers": [
      "not"
    ],
    "char": "∉",
    "insertMath": "in.not",
    "insertCode": "sym.in.not"
  },
  {
    "name": "in.rev",
    "base": "in",
    "modifiers": [
      "rev"
    ],
    "char": "∋",
    "insertMath": "in.rev",
    "insertCode": "sym.in.rev"
  },
  {
    "name": "in.rev.not",
    "base": "in",
    "modifiers": [
      "rev",
      "not"
    ],
    "char": "∌",
    "insertMath": "in.rev.not",
    "insertCode": "sym.in.rev.not"
  },
  {
    "name": "in.rev.small",
    "base": "in",
    "modifiers": [
      "rev",
      "small"
    ],
    "char": "∍",
    "insertMath": "in.rev.small",
    "insertCode": "sym.in.rev.small"
  },
  {
    "name": "in.small",
    "base": "in",
    "modifiers": [
      "small"
    ],
    "char": "∊",
    "insertMath": "in.small",
    "insertCode": "sym.in.small"
  },
  {
    "name": "subset",
    "base": "subset",
    "modifiers": [],
    "char": "⊂",
    "insertMath": "subset",
    "insertCode": "sym.subset"
  },
  {
    "name": "subset.approx",
    "base": "subset",
    "modifiers": [
      "approx"
    ],
    "char": "⫉",
    "insertMath": "subset.approx",
    "insertCode": "sym.subset.approx"
  },
  {
    "name": "subset.closed",
    "base": "subset",
    "modifiers": [
      "closed"
    ],
    "char": "⫏",
    "insertMath": "subset.closed",
    "insertCode": "sym.subset.closed"
  },
  {
    "name": "subset.closed.eq",
    "base": "subset",
    "modifiers": [
      "closed",
      "eq"
    ],
    "char": "⫑",
    "insertMath": "subset.closed.eq",
    "insertCode": "sym.subset.closed.eq"
  },
  {
    "name": "subset.dot",
    "base": "subset",
    "modifiers": [
      "dot"
    ],
    "char": "⪽",
    "insertMath": "subset.dot",
    "insertCode": "sym.subset.dot"
  },
  {
    "name": "subset.double",
    "base": "subset",
    "modifiers": [
      "double"
    ],
    "char": "⋐",
    "insertMath": "subset.double",
    "insertCode": "sym.subset.double"
  },
  {
    "name": "subset.eq",
    "base": "subset",
    "modifiers": [
      "eq"
    ],
    "char": "⊆",
    "insertMath": "subset.eq",
    "insertCode": "sym.subset.eq"
  },
  {
    "name": "subset.eq.dot",
    "base": "subset",
    "modifiers": [
      "eq",
      "dot"
    ],
    "char": "⫃",
    "insertMath": "subset.eq.dot",
    "insertCode": "sym.subset.eq.dot"
  },
  {
    "name": "subset.eq.not",
    "base": "subset",
    "modifiers": [
      "eq",
      "not"
    ],
    "char": "⊈",
    "insertMath": "subset.eq.not",
    "insertCode": "sym.subset.eq.not"
  },
  {
    "name": "subset.eq.sq",
    "base": "subset",
    "modifiers": [
      "eq",
      "sq"
    ],
    "char": "⊑",
    "insertMath": "subset.eq.sq",
    "insertCode": "sym.subset.eq.sq"
  },
  {
    "name": "subset.eq.sq.not",
    "base": "subset",
    "modifiers": [
      "eq",
      "sq",
      "not"
    ],
    "char": "⋢",
    "insertMath": "subset.eq.sq.not",
    "insertCode": "sym.subset.eq.sq.not"
  },
  {
    "name": "subset.equiv",
    "base": "subset",
    "modifiers": [
      "equiv"
    ],
    "char": "⫅",
    "insertMath": "subset.equiv",
    "insertCode": "sym.subset.equiv"
  },
  {
    "name": "subset.neq",
    "base": "subset",
    "modifiers": [
      "neq"
    ],
    "char": "⊊",
    "insertMath": "subset.neq",
    "insertCode": "sym.subset.neq"
  },
  {
    "name": "subset.nequiv",
    "base": "subset",
    "modifiers": [
      "nequiv"
    ],
    "char": "⫋",
    "insertMath": "subset.nequiv",
    "insertCode": "sym.subset.nequiv"
  },
  {
    "name": "subset.not",
    "base": "subset",
    "modifiers": [
      "not"
    ],
    "char": "⊄",
    "insertMath": "subset.not",
    "insertCode": "sym.subset.not"
  },
  {
    "name": "subset.plus",
    "base": "subset",
    "modifiers": [
      "plus"
    ],
    "char": "⪿",
    "insertMath": "subset.plus",
    "insertCode": "sym.subset.plus"
  },
  {
    "name": "subset.sq",
    "base": "subset",
    "modifiers": [
      "sq"
    ],
    "char": "⊏",
    "insertMath": "subset.sq",
    "insertCode": "sym.subset.sq"
  },
  {
    "name": "subset.sq.neq",
    "base": "subset",
    "modifiers": [
      "sq",
      "neq"
    ],
    "char": "⋤",
    "insertMath": "subset.sq.neq",
    "insertCode": "sym.subset.sq.neq"
  },
  {
    "name": "subset.tilde",
    "base": "subset",
    "modifiers": [
      "tilde"
    ],
    "char": "⫇",
    "insertMath": "subset.tilde",
    "insertCode": "sym.subset.tilde"
  },
  {
    "name": "subset.times",
    "base": "subset",
    "modifiers": [
      "times"
    ],
    "char": "⫁",
    "insertMath": "subset.times",
    "insertCode": "sym.subset.times"
  },
  {
    "name": "supset",
    "base": "supset",
    "modifiers": [],
    "char": "⊃",
    "insertMath": "supset",
    "insertCode": "sym.supset"
  },
  {
    "name": "supset.approx",
    "base": "supset",
    "modifiers": [
      "approx"
    ],
    "char": "⫊",
    "insertMath": "supset.approx",
    "insertCode": "sym.supset.approx"
  },
  {
    "name": "supset.closed",
    "base": "supset",
    "modifiers": [
      "closed"
    ],
    "char": "⫐",
    "insertMath": "supset.closed",
    "insertCode": "sym.supset.closed"
  },
  {
    "name": "supset.closed.eq",
    "base": "supset",
    "modifiers": [
      "closed",
      "eq"
    ],
    "char": "⫒",
    "insertMath": "supset.closed.eq",
    "insertCode": "sym.supset.closed.eq"
  },
  {
    "name": "supset.dot",
    "base": "supset",
    "modifiers": [
      "dot"
    ],
    "char": "⪾",
    "insertMath": "supset.dot",
    "insertCode": "sym.supset.dot"
  },
  {
    "name": "supset.double",
    "base": "supset",
    "modifiers": [
      "double"
    ],
    "char": "⋑",
    "insertMath": "supset.double",
    "insertCode": "sym.supset.double"
  },
  {
    "name": "supset.eq",
    "base": "supset",
    "modifiers": [
      "eq"
    ],
    "char": "⊇",
    "insertMath": "supset.eq",
    "insertCode": "sym.supset.eq"
  },
  {
    "name": "supset.eq.dot",
    "base": "supset",
    "modifiers": [
      "eq",
      "dot"
    ],
    "char": "⫄",
    "insertMath": "supset.eq.dot",
    "insertCode": "sym.supset.eq.dot"
  },
  {
    "name": "supset.eq.not",
    "base": "supset",
    "modifiers": [
      "eq",
      "not"
    ],
    "char": "⊉",
    "insertMath": "supset.eq.not",
    "insertCode": "sym.supset.eq.not"
  },
  {
    "name": "supset.eq.sq",
    "base": "supset",
    "modifiers": [
      "eq",
      "sq"
    ],
    "char": "⊒",
    "insertMath": "supset.eq.sq",
    "insertCode": "sym.supset.eq.sq"
  },
  {
    "name": "supset.eq.sq.not",
    "base": "supset",
    "modifiers": [
      "eq",
      "sq",
      "not"
    ],
    "char": "⋣",
    "insertMath": "supset.eq.sq.not",
    "insertCode": "sym.supset.eq.sq.not"
  },
  {
    "name": "supset.equiv",
    "base": "supset",
    "modifiers": [
      "equiv"
    ],
    "char": "⫆",
    "insertMath": "supset.equiv",
    "insertCode": "sym.supset.equiv"
  },
  {
    "name": "supset.neq",
    "base": "supset",
    "modifiers": [
      "neq"
    ],
    "char": "⊋",
    "insertMath": "supset.neq",
    "insertCode": "sym.supset.neq"
  },
  {
    "name": "supset.nequiv",
    "base": "supset",
    "modifiers": [
      "nequiv"
    ],
    "char": "⫌",
    "insertMath": "supset.nequiv",
    "insertCode": "sym.supset.nequiv"
  },
  {
    "name": "supset.not",
    "base": "supset",
    "modifiers": [
      "not"
    ],
    "char": "⊅",
    "insertMath": "supset.not",
    "insertCode": "sym.supset.not"
  },
  {
    "name": "supset.plus",
    "base": "supset",
    "modifiers": [
      "plus"
    ],
    "char": "⫀",
    "insertMath": "supset.plus",
    "insertCode": "sym.supset.plus"
  },
  {
    "name": "supset.sq",
    "base": "supset",
    "modifiers": [
      "sq"
    ],
    "char": "⊐",
    "insertMath": "supset.sq",
    "insertCode": "sym.supset.sq"
  },
  {
    "name": "supset.sq.neq",
    "base": "supset",
    "modifiers": [
      "sq",
      "neq"
    ],
    "char": "⋥",
    "insertMath": "supset.sq.neq",
    "insertCode": "sym.supset.sq.neq"
  },
  {
    "name": "supset.tilde",
    "base": "supset",
    "modifiers": [
      "tilde"
    ],
    "char": "⫈",
    "insertMath": "supset.tilde",
    "insertCode": "sym.supset.tilde"
  },
  {
    "name": "supset.times",
    "base": "supset",
    "modifiers": [
      "times"
    ],
    "char": "⫂",
    "insertMath": "supset.times",
    "insertCode": "sym.supset.times"
  },
  {
    "name": "union",
    "base": "union",
    "modifiers": [],
    "char": "∪",
    "insertMath": "union",
    "insertCode": "sym.union"
  },
  {
    "name": "union.serif",
    "base": "union",
    "modifiers": [
      "serif"
    ],
    "char": "∪︀",
    "insertMath": "union.serif",
    "insertCode": "sym.union.serif"
  },
  {
    "name": "union.arrow",
    "base": "union",
    "modifiers": [
      "arrow"
    ],
    "char": "⊌",
    "insertMath": "union.arrow",
    "insertCode": "sym.union.arrow"
  },
  {
    "name": "union.big",
    "base": "union",
    "modifiers": [
      "big"
    ],
    "char": "⋃",
    "insertMath": "union.big",
    "insertCode": "sym.union.big"
  },
  {
    "name": "union.dot",
    "base": "union",
    "modifiers": [
      "dot"
    ],
    "char": "⊍",
    "insertMath": "union.dot",
    "insertCode": "sym.union.dot"
  },
  {
    "name": "union.dot.big",
    "base": "union",
    "modifiers": [
      "dot",
      "big"
    ],
    "char": "⨃",
    "insertMath": "union.dot.big",
    "insertCode": "sym.union.dot.big"
  },
  {
    "name": "union.double",
    "base": "union",
    "modifiers": [
      "double"
    ],
    "char": "⋓",
    "insertMath": "union.double",
    "insertCode": "sym.union.double"
  },
  {
    "name": "union.minus",
    "base": "union",
    "modifiers": [
      "minus"
    ],
    "char": "⩁",
    "insertMath": "union.minus",
    "insertCode": "sym.union.minus"
  },
  {
    "name": "union.or",
    "base": "union",
    "modifiers": [
      "or"
    ],
    "char": "⩅",
    "insertMath": "union.or",
    "insertCode": "sym.union.or"
  },
  {
    "name": "union.plus",
    "base": "union",
    "modifiers": [
      "plus"
    ],
    "char": "⊎",
    "insertMath": "union.plus",
    "insertCode": "sym.union.plus"
  },
  {
    "name": "union.plus.big",
    "base": "union",
    "modifiers": [
      "plus",
      "big"
    ],
    "char": "⨄",
    "insertMath": "union.plus.big",
    "insertCode": "sym.union.plus.big"
  },
  {
    "name": "union.sq",
    "base": "union",
    "modifiers": [
      "sq"
    ],
    "char": "⊔",
    "insertMath": "union.sq",
    "insertCode": "sym.union.sq"
  },
  {
    "name": "union.sq.serif",
    "base": "union",
    "modifiers": [
      "sq",
      "serif"
    ],
    "char": "⊔︀",
    "insertMath": "union.sq.serif",
    "insertCode": "sym.union.sq.serif"
  },
  {
    "name": "union.sq.big",
    "base": "union",
    "modifiers": [
      "sq",
      "big"
    ],
    "char": "⨆",
    "insertMath": "union.sq.big",
    "insertCode": "sym.union.sq.big"
  },
  {
    "name": "union.sq.double",
    "base": "union",
    "modifiers": [
      "sq",
      "double"
    ],
    "char": "⩏",
    "insertMath": "union.sq.double",
    "insertCode": "sym.union.sq.double"
  },
  {
    "name": "inter",
    "base": "inter",
    "modifiers": [],
    "char": "∩",
    "insertMath": "inter",
    "insertCode": "sym.inter"
  },
  {
    "name": "inter.serif",
    "base": "inter",
    "modifiers": [
      "serif"
    ],
    "char": "∩︀",
    "insertMath": "inter.serif",
    "insertCode": "sym.inter.serif"
  },
  {
    "name": "inter.and",
    "base": "inter",
    "modifiers": [
      "and"
    ],
    "char": "⩄",
    "insertMath": "inter.and",
    "insertCode": "sym.inter.and"
  },
  {
    "name": "inter.big",
    "base": "inter",
    "modifiers": [
      "big"
    ],
    "char": "⋂",
    "insertMath": "inter.big",
    "insertCode": "sym.inter.big"
  },
  {
    "name": "inter.dot",
    "base": "inter",
    "modifiers": [
      "dot"
    ],
    "char": "⩀",
    "insertMath": "inter.dot",
    "insertCode": "sym.inter.dot"
  },
  {
    "name": "inter.double",
    "base": "inter",
    "modifiers": [
      "double"
    ],
    "char": "⋒",
    "insertMath": "inter.double",
    "insertCode": "sym.inter.double"
  },
  {
    "name": "inter.sq",
    "base": "inter",
    "modifiers": [
      "sq"
    ],
    "char": "⊓",
    "insertMath": "inter.sq",
    "insertCode": "sym.inter.sq"
  },
  {
    "name": "inter.sq.serif",
    "base": "inter",
    "modifiers": [
      "sq",
      "serif"
    ],
    "char": "⊓︀",
    "insertMath": "inter.sq.serif",
    "insertCode": "sym.inter.sq.serif"
  },
  {
    "name": "inter.sq.big",
    "base": "inter",
    "modifiers": [
      "sq",
      "big"
    ],
    "char": "⨅",
    "insertMath": "inter.sq.big",
    "insertCode": "sym.inter.sq.big"
  },
  {
    "name": "inter.sq.double",
    "base": "inter",
    "modifiers": [
      "sq",
      "double"
    ],
    "char": "⩎",
    "insertMath": "inter.sq.double",
    "insertCode": "sym.inter.sq.double"
  },
  {
    "name": "infinity",
    "base": "infinity",
    "modifiers": [],
    "char": "∞",
    "insertMath": "infinity",
    "insertCode": "sym.infinity"
  },
  {
    "name": "infinity.bar",
    "base": "infinity",
    "modifiers": [
      "bar"
    ],
    "char": "⧞",
    "insertMath": "infinity.bar",
    "insertCode": "sym.infinity.bar"
  },
  {
    "name": "infinity.incomplete",
    "base": "infinity",
    "modifiers": [
      "incomplete"
    ],
    "char": "⧜",
    "insertMath": "infinity.incomplete",
    "insertCode": "sym.infinity.incomplete"
  },
  {
    "name": "infinity.tie",
    "base": "infinity",
    "modifiers": [
      "tie"
    ],
    "char": "⧝",
    "insertMath": "infinity.tie",
    "insertCode": "sym.infinity.tie"
  },
  {
    "name": "oo",
    "base": "oo",
    "modifiers": [],
    "char": "∞",
    "insertMath": "oo",
    "insertCode": "sym.oo"
  },
  {
    "name": "partial",
    "base": "partial",
    "modifiers": [],
    "char": "∂",
    "insertMath": "partial",
    "insertCode": "sym.partial"
  },
  {
    "name": "gradient",
    "base": "gradient",
    "modifiers": [],
    "char": "∇",
    "insertMath": "gradient",
    "insertCode": "sym.gradient"
  },
  {
    "name": "nabla",
    "base": "nabla",
    "modifiers": [],
    "char": "∇",
    "insertMath": "nabla",
    "insertCode": "sym.nabla"
  },
  {
    "name": "sum",
    "base": "sum",
    "modifiers": [],
    "char": "∑",
    "insertMath": "sum",
    "insertCode": "sym.sum"
  },
  {
    "name": "sum.integral",
    "base": "sum",
    "modifiers": [
      "integral"
    ],
    "char": "⨋",
    "insertMath": "sum.integral",
    "insertCode": "sym.sum.integral"
  },
  {
    "name": "product",
    "base": "product",
    "modifiers": [],
    "char": "∏",
    "insertMath": "product",
    "insertCode": "sym.product"
  },
  {
    "name": "product.co",
    "base": "product",
    "modifiers": [
      "co"
    ],
    "char": "∐",
    "insertMath": "product.co",
    "insertCode": "sym.product.co"
  },
  {
    "name": "integral",
    "base": "integral",
    "modifiers": [],
    "char": "∫",
    "insertMath": "integral",
    "insertCode": "sym.integral"
  },
  {
    "name": "integral.arrow.hook",
    "base": "integral",
    "modifiers": [
      "arrow",
      "hook"
    ],
    "char": "⨗",
    "insertMath": "integral.arrow.hook",
    "insertCode": "sym.integral.arrow.hook"
  },
  {
    "name": "integral.ccw",
    "base": "integral",
    "modifiers": [
      "ccw"
    ],
    "char": "⨑",
    "insertMath": "integral.ccw",
    "insertCode": "sym.integral.ccw"
  },
  {
    "name": "integral.cont",
    "base": "integral",
    "modifiers": [
      "cont"
    ],
    "char": "∮",
    "insertMath": "integral.cont",
    "insertCode": "sym.integral.cont"
  },
  {
    "name": "integral.cont.ccw",
    "base": "integral",
    "modifiers": [
      "cont",
      "ccw"
    ],
    "char": "∳",
    "insertMath": "integral.cont.ccw",
    "insertCode": "sym.integral.cont.ccw"
  },
  {
    "name": "integral.cont.cw",
    "base": "integral",
    "modifiers": [
      "cont",
      "cw"
    ],
    "char": "∲",
    "insertMath": "integral.cont.cw",
    "insertCode": "sym.integral.cont.cw"
  },
  {
    "name": "integral.cw",
    "base": "integral",
    "modifiers": [
      "cw"
    ],
    "char": "∱",
    "insertMath": "integral.cw",
    "insertCode": "sym.integral.cw"
  },
  {
    "name": "integral.dash",
    "base": "integral",
    "modifiers": [
      "dash"
    ],
    "char": "⨍",
    "insertMath": "integral.dash",
    "insertCode": "sym.integral.dash"
  },
  {
    "name": "integral.dash.double",
    "base": "integral",
    "modifiers": [
      "dash",
      "double"
    ],
    "char": "⨎",
    "insertMath": "integral.dash.double",
    "insertCode": "sym.integral.dash.double"
  },
  {
    "name": "integral.double",
    "base": "integral",
    "modifiers": [
      "double"
    ],
    "char": "∬",
    "insertMath": "integral.double",
    "insertCode": "sym.integral.double"
  },
  {
    "name": "integral.quad",
    "base": "integral",
    "modifiers": [
      "quad"
    ],
    "char": "⨌",
    "insertMath": "integral.quad",
    "insertCode": "sym.integral.quad"
  },
  {
    "name": "integral.inter",
    "base": "integral",
    "modifiers": [
      "inter"
    ],
    "char": "⨙",
    "insertMath": "integral.inter",
    "insertCode": "sym.integral.inter"
  },
  {
    "name": "integral.slash",
    "base": "integral",
    "modifiers": [
      "slash"
    ],
    "char": "⨏",
    "insertMath": "integral.slash",
    "insertCode": "sym.integral.slash"
  },
  {
    "name": "integral.square",
    "base": "integral",
    "modifiers": [
      "square"
    ],
    "char": "⨖",
    "insertMath": "integral.square",
    "insertCode": "sym.integral.square"
  },
  {
    "name": "integral.surf",
    "base": "integral",
    "modifiers": [
      "surf"
    ],
    "char": "∯",
    "insertMath": "integral.surf",
    "insertCode": "sym.integral.surf"
  },
  {
    "name": "integral.times",
    "base": "integral",
    "modifiers": [
      "times"
    ],
    "char": "⨘",
    "insertMath": "integral.times",
    "insertCode": "sym.integral.times"
  },
  {
    "name": "integral.triple",
    "base": "integral",
    "modifiers": [
      "triple"
    ],
    "char": "∭",
    "insertMath": "integral.triple",
    "insertCode": "sym.integral.triple"
  },
  {
    "name": "integral.union",
    "base": "integral",
    "modifiers": [
      "union"
    ],
    "char": "⨚",
    "insertMath": "integral.union",
    "insertCode": "sym.integral.union"
  },
  {
    "name": "integral.vol",
    "base": "integral",
    "modifiers": [
      "vol"
    ],
    "char": "∰",
    "insertMath": "integral.vol",
    "insertCode": "sym.integral.vol"
  },
  {
    "name": "laplace",
    "base": "laplace",
    "modifiers": [],
    "char": "∆",
    "insertMath": "laplace",
    "insertCode": "sym.laplace"
  },
  {
    "name": "forall",
    "base": "forall",
    "modifiers": [],
    "char": "∀",
    "insertMath": "forall",
    "insertCode": "sym.forall"
  },
  {
    "name": "exists",
    "base": "exists",
    "modifiers": [],
    "char": "∃",
    "insertMath": "exists",
    "insertCode": "sym.exists"
  },
  {
    "name": "exists.not",
    "base": "exists",
    "modifiers": [
      "not"
    ],
    "char": "∄",
    "insertMath": "exists.not",
    "insertCode": "sym.exists.not"
  },
  {
    "name": "top",
    "base": "top",
    "modifiers": [],
    "char": "⊤",
    "insertMath": "top",
    "insertCode": "sym.top"
  },
  {
    "name": "bot",
    "base": "bot",
    "modifiers": [],
    "char": "⊥",
    "insertMath": "bot",
    "insertCode": "sym.bot"
  },
  {
    "name": "not",
    "base": "not",
    "modifiers": [],
    "char": "¬",
    "insertMath": "not",
    "insertCode": "sym.not"
  },
  {
    "name": "and",
    "base": "and",
    "modifiers": [],
    "char": "∧",
    "insertMath": "and",
    "insertCode": "sym.and"
  },
  {
    "name": "and.big",
    "base": "and",
    "modifiers": [
      "big"
    ],
    "char": "⋀",
    "insertMath": "and.big",
    "insertCode": "sym.and.big"
  },
  {
    "name": "and.curly",
    "base": "and",
    "modifiers": [
      "curly"
    ],
    "char": "⋏",
    "insertMath": "and.curly",
    "insertCode": "sym.and.curly"
  },
  {
    "name": "and.dot",
    "base": "and",
    "modifiers": [
      "dot"
    ],
    "char": "⟑",
    "insertMath": "and.dot",
    "insertCode": "sym.and.dot"
  },
  {
    "name": "and.double",
    "base": "and",
    "modifiers": [
      "double"
    ],
    "char": "⩓",
    "insertMath": "and.double",
    "insertCode": "sym.and.double"
  },
  {
    "name": "or",
    "base": "or",
    "modifiers": [],
    "char": "∨",
    "insertMath": "or",
    "insertCode": "sym.or"
  },
  {
    "name": "or.big",
    "base": "or",
    "modifiers": [
      "big"
    ],
    "char": "⋁",
    "insertMath": "or.big",
    "insertCode": "sym.or.big"
  },
  {
    "name": "or.curly",
    "base": "or",
    "modifiers": [
      "curly"
    ],
    "char": "⋎",
    "insertMath": "or.curly",
    "insertCode": "sym.or.curly"
  },
  {
    "name": "or.dot",
    "base": "or",
    "modifiers": [
      "dot"
    ],
    "char": "⟇",
    "insertMath": "or.dot",
    "insertCode": "sym.or.dot"
  },
  {
    "name": "or.double",
    "base": "or",
    "modifiers": [
      "double"
    ],
    "char": "⩔",
    "insertMath": "or.double",
    "insertCode": "sym.or.double"
  },
  {
    "name": "xor",
    "base": "xor",
    "modifiers": [],
    "char": "⊕",
    "insertMath": "xor",
    "insertCode": "sym.xor"
  },
  {
    "name": "xor.big",
    "base": "xor",
    "modifiers": [
      "big"
    ],
    "char": "⨁",
    "insertMath": "xor.big",
    "insertCode": "sym.xor.big"
  },
  {
    "name": "models",
    "base": "models",
    "modifiers": [],
    "char": "⊧",
    "insertMath": "models",
    "insertCode": "sym.models"
  },
  {
    "name": "forces",
    "base": "forces",
    "modifiers": [],
    "char": "⊩",
    "insertMath": "forces",
    "insertCode": "sym.forces"
  },
  {
    "name": "forces.not",
    "base": "forces",
    "modifiers": [
      "not"
    ],
    "char": "⊮",
    "insertMath": "forces.not",
    "insertCode": "sym.forces.not"
  },
  {
    "name": "therefore",
    "base": "therefore",
    "modifiers": [],
    "char": "∴",
    "insertMath": "therefore",
    "insertCode": "sym.therefore"
  },
  {
    "name": "because",
    "base": "because",
    "modifiers": [],
    "char": "∵",
    "insertMath": "because",
    "insertCode": "sym.because"
  },
  {
    "name": "qed",
    "base": "qed",
    "modifiers": [],
    "char": "∎",
    "insertMath": "qed",
    "insertCode": "sym.qed"
  },
  {
    "name": "mapsto",
    "base": "mapsto",
    "modifiers": [],
    "char": "↦",
    "insertMath": "mapsto",
    "insertCode": "sym.mapsto"
  },
  {
    "name": "mapsto.long",
    "base": "mapsto",
    "modifiers": [
      "long"
    ],
    "char": "⟼",
    "insertMath": "mapsto.long",
    "insertCode": "sym.mapsto.long"
  },
  {
    "name": "compose",
    "base": "compose",
    "modifiers": [],
    "char": "∘",
    "insertMath": "compose",
    "insertCode": "sym.compose"
  },
  {
    "name": "compose.o",
    "base": "compose",
    "modifiers": [
      "o"
    ],
    "char": "⊚",
    "insertMath": "compose.o",
    "insertCode": "sym.compose.o"
  },
  {
    "name": "convolve",
    "base": "convolve",
    "modifiers": [],
    "char": "∗",
    "insertMath": "convolve",
    "insertCode": "sym.convolve"
  },
  {
    "name": "convolve.o",
    "base": "convolve",
    "modifiers": [
      "o"
    ],
    "char": "⊛",
    "insertMath": "convolve.o",
    "insertCode": "sym.convolve.o"
  },
  {
    "name": "multimap",
    "base": "multimap",
    "modifiers": [],
    "char": "⊸",
    "insertMath": "multimap",
    "insertCode": "sym.multimap"
  },
  {
    "name": "multimap.double",
    "base": "multimap",
    "modifiers": [
      "double"
    ],
    "char": "⧟",
    "insertMath": "multimap.double",
    "insertCode": "sym.multimap.double"
  },
  {
    "name": "tiny",
    "base": "tiny",
    "modifiers": [],
    "char": "⧾",
    "insertMath": "tiny",
    "insertCode": "sym.tiny"
  },
  {
    "name": "miny",
    "base": "miny",
    "modifiers": [],
    "char": "⧿",
    "insertMath": "miny",
    "insertCode": "sym.miny"
  },
  {
    "name": "divides",
    "base": "divides",
    "modifiers": [],
    "char": "∣",
    "insertMath": "divides",
    "insertCode": "sym.divides"
  },
  {
    "name": "divides.not",
    "base": "divides",
    "modifiers": [
      "not"
    ],
    "char": "∤",
    "insertMath": "divides.not",
    "insertCode": "sym.divides.not"
  },
  {
    "name": "divides.not.rev",
    "base": "divides",
    "modifiers": [
      "not",
      "rev"
    ],
    "char": "⫮",
    "insertMath": "divides.not.rev",
    "insertCode": "sym.divides.not.rev"
  },
  {
    "name": "divides.struck",
    "base": "divides",
    "modifiers": [
      "struck"
    ],
    "char": "⟊",
    "insertMath": "divides.struck",
    "insertCode": "sym.divides.struck"
  },
  {
    "name": "wreath",
    "base": "wreath",
    "modifiers": [],
    "char": "≀",
    "insertMath": "wreath",
    "insertCode": "sym.wreath"
  },
  {
    "name": "angle",
    "base": "angle",
    "modifiers": [],
    "char": "∠",
    "insertMath": "angle",
    "insertCode": "sym.angle"
  },
  {
    "name": "angle.acute",
    "base": "angle",
    "modifiers": [
      "acute"
    ],
    "char": "⦟",
    "insertMath": "angle.acute",
    "insertCode": "sym.angle.acute"
  },
  {
    "name": "angle.arc",
    "base": "angle",
    "modifiers": [
      "arc"
    ],
    "char": "∡",
    "insertMath": "angle.arc",
    "insertCode": "sym.angle.arc"
  },
  {
    "name": "angle.arc.rev",
    "base": "angle",
    "modifiers": [
      "arc",
      "rev"
    ],
    "char": "⦛",
    "insertMath": "angle.arc.rev",
    "insertCode": "sym.angle.arc.rev"
  },
  {
    "name": "angle.azimuth",
    "base": "angle",
    "modifiers": [
      "azimuth"
    ],
    "char": "⍼",
    "insertMath": "angle.azimuth",
    "insertCode": "sym.angle.azimuth"
  },
  {
    "name": "angle.obtuse",
    "base": "angle",
    "modifiers": [
      "obtuse"
    ],
    "char": "⦦",
    "insertMath": "angle.obtuse",
    "insertCode": "sym.angle.obtuse"
  },
  {
    "name": "angle.rev",
    "base": "angle",
    "modifiers": [
      "rev"
    ],
    "char": "⦣",
    "insertMath": "angle.rev",
    "insertCode": "sym.angle.rev"
  },
  {
    "name": "angle.right",
    "base": "angle",
    "modifiers": [
      "right"
    ],
    "char": "∟",
    "insertMath": "angle.right",
    "insertCode": "sym.angle.right"
  },
  {
    "name": "angle.right.rev",
    "base": "angle",
    "modifiers": [
      "right",
      "rev"
    ],
    "char": "⯾",
    "insertMath": "angle.right.rev",
    "insertCode": "sym.angle.right.rev"
  },
  {
    "name": "angle.right.arc",
    "base": "angle",
    "modifiers": [
      "right",
      "arc"
    ],
    "char": "⊾",
    "insertMath": "angle.right.arc",
    "insertCode": "sym.angle.right.arc"
  },
  {
    "name": "angle.right.dot",
    "base": "angle",
    "modifiers": [
      "right",
      "dot"
    ],
    "char": "⦝",
    "insertMath": "angle.right.dot",
    "insertCode": "sym.angle.right.dot"
  },
  {
    "name": "angle.right.square",
    "base": "angle",
    "modifiers": [
      "right",
      "square"
    ],
    "char": "⦜",
    "insertMath": "angle.right.square",
    "insertCode": "sym.angle.right.square"
  },
  {
    "name": "angle.s",
    "base": "angle",
    "modifiers": [
      "s"
    ],
    "char": "⦞",
    "insertMath": "angle.s",
    "insertCode": "sym.angle.s"
  },
  {
    "name": "angle.spatial",
    "base": "angle",
    "modifiers": [
      "spatial"
    ],
    "char": "⟀",
    "insertMath": "angle.spatial",
    "insertCode": "sym.angle.spatial"
  },
  {
    "name": "angle.spheric",
    "base": "angle",
    "modifiers": [
      "spheric"
    ],
    "char": "∢",
    "insertMath": "angle.spheric",
    "insertCode": "sym.angle.spheric"
  },
  {
    "name": "angle.spheric.rev",
    "base": "angle",
    "modifiers": [
      "spheric",
      "rev"
    ],
    "char": "⦠",
    "insertMath": "angle.spheric.rev",
    "insertCode": "sym.angle.spheric.rev"
  },
  {
    "name": "angle.spheric.t",
    "base": "angle",
    "modifiers": [
      "spheric",
      "t"
    ],
    "char": "⦡",
    "insertMath": "angle.spheric.t",
    "insertCode": "sym.angle.spheric.t"
  },
  {
    "name": "angzarr",
    "base": "angzarr",
    "modifiers": [],
    "char": "⍼",
    "insertMath": "angzarr",
    "insertCode": "sym.angzarr"
  },
  {
    "name": "parallel",
    "base": "parallel",
    "modifiers": [],
    "char": "∥",
    "insertMath": "parallel",
    "insertCode": "sym.parallel"
  },
  {
    "name": "parallel.struck",
    "base": "parallel",
    "modifiers": [
      "struck"
    ],
    "char": "⫲",
    "insertMath": "parallel.struck",
    "insertCode": "sym.parallel.struck"
  },
  {
    "name": "parallel.o",
    "base": "parallel",
    "modifiers": [
      "o"
    ],
    "char": "⦷",
    "insertMath": "parallel.o",
    "insertCode": "sym.parallel.o"
  },
  {
    "name": "parallel.eq",
    "base": "parallel",
    "modifiers": [
      "eq"
    ],
    "char": "⋕",
    "insertMath": "parallel.eq",
    "insertCode": "sym.parallel.eq"
  },
  {
    "name": "parallel.equiv",
    "base": "parallel",
    "modifiers": [
      "equiv"
    ],
    "char": "⩨",
    "insertMath": "parallel.equiv",
    "insertCode": "sym.parallel.equiv"
  },
  {
    "name": "parallel.not",
    "base": "parallel",
    "modifiers": [
      "not"
    ],
    "char": "∦",
    "insertMath": "parallel.not",
    "insertCode": "sym.parallel.not"
  },
  {
    "name": "parallel.slanted.eq",
    "base": "parallel",
    "modifiers": [
      "slanted",
      "eq"
    ],
    "char": "⧣",
    "insertMath": "parallel.slanted.eq",
    "insertCode": "sym.parallel.slanted.eq"
  },
  {
    "name": "parallel.slanted.eq.tilde",
    "base": "parallel",
    "modifiers": [
      "slanted",
      "eq",
      "tilde"
    ],
    "char": "⧤",
    "insertMath": "parallel.slanted.eq.tilde",
    "insertCode": "sym.parallel.slanted.eq.tilde"
  },
  {
    "name": "parallel.slanted.equiv",
    "base": "parallel",
    "modifiers": [
      "slanted",
      "equiv"
    ],
    "char": "⧥",
    "insertMath": "parallel.slanted.equiv",
    "insertCode": "sym.parallel.slanted.equiv"
  },
  {
    "name": "parallel.tilde",
    "base": "parallel",
    "modifiers": [
      "tilde"
    ],
    "char": "⫳",
    "insertMath": "parallel.tilde",
    "insertCode": "sym.parallel.tilde"
  },
  {
    "name": "perp",
    "base": "perp",
    "modifiers": [],
    "char": "⟂",
    "insertMath": "perp",
    "insertCode": "sym.perp"
  },
  {
    "name": "perp.o",
    "base": "perp",
    "modifiers": [
      "o"
    ],
    "char": "⦹",
    "insertMath": "perp.o",
    "insertCode": "sym.perp.o"
  },
  {
    "name": "earth",
    "base": "earth",
    "modifiers": [],
    "char": "🜨",
    "insertMath": "earth",
    "insertCode": "sym.earth"
  },
  {
    "name": "earth.alt",
    "base": "earth",
    "modifiers": [
      "alt"
    ],
    "char": "♁",
    "insertMath": "earth.alt",
    "insertCode": "sym.earth.alt"
  },
  {
    "name": "jupiter",
    "base": "jupiter",
    "modifiers": [],
    "char": "♃",
    "insertMath": "jupiter",
    "insertCode": "sym.jupiter"
  },
  {
    "name": "mars",
    "base": "mars",
    "modifiers": [],
    "char": "♂︎",
    "insertMath": "mars",
    "insertCode": "sym.mars"
  },
  {
    "name": "mercury",
    "base": "mercury",
    "modifiers": [],
    "char": "☿",
    "insertMath": "mercury",
    "insertCode": "sym.mercury"
  },
  {
    "name": "neptune",
    "base": "neptune",
    "modifiers": [],
    "char": "♆",
    "insertMath": "neptune",
    "insertCode": "sym.neptune"
  },
  {
    "name": "neptune.alt",
    "base": "neptune",
    "modifiers": [
      "alt"
    ],
    "char": "⯉",
    "insertMath": "neptune.alt",
    "insertCode": "sym.neptune.alt"
  },
  {
    "name": "saturn",
    "base": "saturn",
    "modifiers": [],
    "char": "♄",
    "insertMath": "saturn",
    "insertCode": "sym.saturn"
  },
  {
    "name": "sun",
    "base": "sun",
    "modifiers": [],
    "char": "☉",
    "insertMath": "sun",
    "insertCode": "sym.sun"
  },
  {
    "name": "uranus",
    "base": "uranus",
    "modifiers": [],
    "char": "⛢",
    "insertMath": "uranus",
    "insertCode": "sym.uranus"
  },
  {
    "name": "uranus.alt",
    "base": "uranus",
    "modifiers": [
      "alt"
    ],
    "char": "♅",
    "insertMath": "uranus.alt",
    "insertCode": "sym.uranus.alt"
  },
  {
    "name": "venus",
    "base": "venus",
    "modifiers": [],
    "char": "♀︎",
    "insertMath": "venus",
    "insertCode": "sym.venus"
  },
  {
    "name": "diameter",
    "base": "diameter",
    "modifiers": [],
    "char": "⌀",
    "insertMath": "diameter",
    "insertCode": "sym.diameter"
  },
  {
    "name": "interleave",
    "base": "interleave",
    "modifiers": [],
    "char": "⫴",
    "insertMath": "interleave",
    "insertCode": "sym.interleave"
  },
  {
    "name": "interleave.big",
    "base": "interleave",
    "modifiers": [
      "big"
    ],
    "char": "⫼",
    "insertMath": "interleave.big",
    "insertCode": "sym.interleave.big"
  },
  {
    "name": "interleave.struck",
    "base": "interleave",
    "modifiers": [
      "struck"
    ],
    "char": "⫵",
    "insertMath": "interleave.struck",
    "insertCode": "sym.interleave.struck"
  },
  {
    "name": "join.r",
    "base": "join",
    "modifiers": [
      "r"
    ],
    "char": "⟖",
    "insertMath": "join.r",
    "insertCode": "sym.join.r"
  },
  {
    "name": "join",
    "base": "join",
    "modifiers": [],
    "char": "⟖",
    "insertMath": "join",
    "insertCode": "sym.join"
  },
  {
    "name": "join.l",
    "base": "join",
    "modifiers": [
      "l"
    ],
    "char": "⟕",
    "insertMath": "join.l",
    "insertCode": "sym.join.l"
  },
  {
    "name": "join.l.r",
    "base": "join",
    "modifiers": [
      "l",
      "r"
    ],
    "char": "⟗",
    "insertMath": "join.l.r",
    "insertCode": "sym.join.l.r"
  },
  {
    "name": "bowtie.stroked",
    "base": "bowtie",
    "modifiers": [
      "stroked"
    ],
    "char": "⋈",
    "insertMath": "bowtie.stroked",
    "insertCode": "sym.bowtie.stroked"
  },
  {
    "name": "bowtie",
    "base": "bowtie",
    "modifiers": [],
    "char": "⋈",
    "insertMath": "bowtie",
    "insertCode": "sym.bowtie"
  },
  {
    "name": "bowtie.stroked.big",
    "base": "bowtie",
    "modifiers": [
      "stroked",
      "big"
    ],
    "char": "⨝",
    "insertMath": "bowtie.stroked.big",
    "insertCode": "sym.bowtie.stroked.big"
  },
  {
    "name": "bowtie.stroked.big.l",
    "base": "bowtie",
    "modifiers": [
      "stroked",
      "big",
      "l"
    ],
    "char": "⟕",
    "insertMath": "bowtie.stroked.big.l",
    "insertCode": "sym.bowtie.stroked.big.l"
  },
  {
    "name": "bowtie.stroked.big.r",
    "base": "bowtie",
    "modifiers": [
      "stroked",
      "big",
      "r"
    ],
    "char": "⟖",
    "insertMath": "bowtie.stroked.big.r",
    "insertCode": "sym.bowtie.stroked.big.r"
  },
  {
    "name": "bowtie.stroked.big.l.r",
    "base": "bowtie",
    "modifiers": [
      "stroked",
      "big",
      "l",
      "r"
    ],
    "char": "⟗",
    "insertMath": "bowtie.stroked.big.l.r",
    "insertCode": "sym.bowtie.stroked.big.l.r"
  },
  {
    "name": "bowtie.filled",
    "base": "bowtie",
    "modifiers": [
      "filled"
    ],
    "char": "⧓",
    "insertMath": "bowtie.filled",
    "insertCode": "sym.bowtie.filled"
  },
  {
    "name": "bowtie.filled.l",
    "base": "bowtie",
    "modifiers": [
      "filled",
      "l"
    ],
    "char": "⧑",
    "insertMath": "bowtie.filled.l",
    "insertCode": "sym.bowtie.filled.l"
  },
  {
    "name": "bowtie.filled.r",
    "base": "bowtie",
    "modifiers": [
      "filled",
      "r"
    ],
    "char": "⧒",
    "insertMath": "bowtie.filled.r",
    "insertCode": "sym.bowtie.filled.r"
  },
  {
    "name": "hourglass.stroked",
    "base": "hourglass",
    "modifiers": [
      "stroked"
    ],
    "char": "⧖",
    "insertMath": "hourglass.stroked",
    "insertCode": "sym.hourglass.stroked"
  },
  {
    "name": "hourglass",
    "base": "hourglass",
    "modifiers": [],
    "char": "⧖",
    "insertMath": "hourglass",
    "insertCode": "sym.hourglass"
  },
  {
    "name": "hourglass.filled",
    "base": "hourglass",
    "modifiers": [
      "filled"
    ],
    "char": "⧗",
    "insertMath": "hourglass.filled",
    "insertCode": "sym.hourglass.filled"
  },
  {
    "name": "degree",
    "base": "degree",
    "modifiers": [],
    "char": "°",
    "insertMath": "degree",
    "insertCode": "sym.degree"
  },
  {
    "name": "smash",
    "base": "smash",
    "modifiers": [],
    "char": "⨳",
    "insertMath": "smash",
    "insertCode": "sym.smash"
  },
  {
    "name": "power.standby",
    "base": "power",
    "modifiers": [
      "standby"
    ],
    "char": "⏻",
    "insertMath": "power.standby",
    "insertCode": "sym.power.standby"
  },
  {
    "name": "power",
    "base": "power",
    "modifiers": [],
    "char": "⏻",
    "insertMath": "power",
    "insertCode": "sym.power"
  },
  {
    "name": "power.on",
    "base": "power",
    "modifiers": [
      "on"
    ],
    "char": "⏽",
    "insertMath": "power.on",
    "insertCode": "sym.power.on"
  },
  {
    "name": "power.off",
    "base": "power",
    "modifiers": [
      "off"
    ],
    "char": "⭘",
    "insertMath": "power.off",
    "insertCode": "sym.power.off"
  },
  {
    "name": "power.on.off",
    "base": "power",
    "modifiers": [
      "on",
      "off"
    ],
    "char": "⏼",
    "insertMath": "power.on.off",
    "insertCode": "sym.power.on.off"
  },
  {
    "name": "power.sleep",
    "base": "power",
    "modifiers": [
      "sleep"
    ],
    "char": "⏾",
    "insertMath": "power.sleep",
    "insertCode": "sym.power.sleep"
  },
  {
    "name": "smile",
    "base": "smile",
    "modifiers": [],
    "char": "⌣",
    "insertMath": "smile",
    "insertCode": "sym.smile"
  },
  {
    "name": "frown",
    "base": "frown",
    "modifiers": [],
    "char": "⌢",
    "insertMath": "frown",
    "insertCode": "sym.frown"
  },
  {
    "name": "afghani",
    "base": "afghani",
    "modifiers": [],
    "char": "؋",
    "insertMath": "afghani",
    "insertCode": "sym.afghani"
  },
  {
    "name": "baht",
    "base": "baht",
    "modifiers": [],
    "char": "฿",
    "insertMath": "baht",
    "insertCode": "sym.baht"
  },
  {
    "name": "bitcoin",
    "base": "bitcoin",
    "modifiers": [],
    "char": "₿",
    "insertMath": "bitcoin",
    "insertCode": "sym.bitcoin"
  },
  {
    "name": "cedi",
    "base": "cedi",
    "modifiers": [],
    "char": "₵",
    "insertMath": "cedi",
    "insertCode": "sym.cedi"
  },
  {
    "name": "cent",
    "base": "cent",
    "modifiers": [],
    "char": "¢",
    "insertMath": "cent",
    "insertCode": "sym.cent"
  },
  {
    "name": "currency",
    "base": "currency",
    "modifiers": [],
    "char": "¤",
    "insertMath": "currency",
    "insertCode": "sym.currency"
  },
  {
    "name": "dollar",
    "base": "dollar",
    "modifiers": [],
    "char": "$",
    "insertMath": "dollar",
    "insertCode": "sym.dollar"
  },
  {
    "name": "dong",
    "base": "dong",
    "modifiers": [],
    "char": "₫",
    "insertMath": "dong",
    "insertCode": "sym.dong"
  },
  {
    "name": "dorome",
    "base": "dorome",
    "modifiers": [],
    "char": "߾",
    "insertMath": "dorome",
    "insertCode": "sym.dorome"
  },
  {
    "name": "dram",
    "base": "dram",
    "modifiers": [],
    "char": "֏",
    "insertMath": "dram",
    "insertCode": "sym.dram"
  },
  {
    "name": "euro",
    "base": "euro",
    "modifiers": [],
    "char": "€",
    "insertMath": "euro",
    "insertCode": "sym.euro"
  },
  {
    "name": "guarani",
    "base": "guarani",
    "modifiers": [],
    "char": "₲",
    "insertMath": "guarani",
    "insertCode": "sym.guarani"
  },
  {
    "name": "hryvnia",
    "base": "hryvnia",
    "modifiers": [],
    "char": "₴",
    "insertMath": "hryvnia",
    "insertCode": "sym.hryvnia"
  },
  {
    "name": "kip",
    "base": "kip",
    "modifiers": [],
    "char": "₭",
    "insertMath": "kip",
    "insertCode": "sym.kip"
  },
  {
    "name": "lari",
    "base": "lari",
    "modifiers": [],
    "char": "₾",
    "insertMath": "lari",
    "insertCode": "sym.lari"
  },
  {
    "name": "lira",
    "base": "lira",
    "modifiers": [],
    "char": "₺",
    "insertMath": "lira",
    "insertCode": "sym.lira"
  },
  {
    "name": "manat",
    "base": "manat",
    "modifiers": [],
    "char": "₼",
    "insertMath": "manat",
    "insertCode": "sym.manat"
  },
  {
    "name": "naira",
    "base": "naira",
    "modifiers": [],
    "char": "₦",
    "insertMath": "naira",
    "insertCode": "sym.naira"
  },
  {
    "name": "pataca",
    "base": "pataca",
    "modifiers": [],
    "char": "$",
    "insertMath": "pataca",
    "insertCode": "sym.pataca"
  },
  {
    "name": "peso",
    "base": "peso",
    "modifiers": [],
    "char": "$",
    "insertMath": "peso",
    "insertCode": "sym.peso"
  },
  {
    "name": "peso.philippine",
    "base": "peso",
    "modifiers": [
      "philippine"
    ],
    "char": "₱",
    "insertMath": "peso.philippine",
    "insertCode": "sym.peso.philippine"
  },
  {
    "name": "pound",
    "base": "pound",
    "modifiers": [],
    "char": "£",
    "insertMath": "pound",
    "insertCode": "sym.pound"
  },
  {
    "name": "riel",
    "base": "riel",
    "modifiers": [],
    "char": "៛",
    "insertMath": "riel",
    "insertCode": "sym.riel"
  },
  {
    "name": "riyal",
    "base": "riyal",
    "modifiers": [],
    "char": "⃁",
    "insertMath": "riyal",
    "insertCode": "sym.riyal"
  },
  {
    "name": "ruble",
    "base": "ruble",
    "modifiers": [],
    "char": "₽",
    "insertMath": "ruble",
    "insertCode": "sym.ruble"
  },
  {
    "name": "rupee.indian",
    "base": "rupee",
    "modifiers": [
      "indian"
    ],
    "char": "₹",
    "insertMath": "rupee.indian",
    "insertCode": "sym.rupee.indian"
  },
  {
    "name": "rupee",
    "base": "rupee",
    "modifiers": [],
    "char": "₹",
    "insertMath": "rupee",
    "insertCode": "sym.rupee"
  },
  {
    "name": "rupee.generic",
    "base": "rupee",
    "modifiers": [
      "generic"
    ],
    "char": "₨",
    "insertMath": "rupee.generic",
    "insertCode": "sym.rupee.generic"
  },
  {
    "name": "rupee.tamil",
    "base": "rupee",
    "modifiers": [
      "tamil"
    ],
    "char": "௹",
    "insertMath": "rupee.tamil",
    "insertCode": "sym.rupee.tamil"
  },
  {
    "name": "rupee.wancho",
    "base": "rupee",
    "modifiers": [
      "wancho"
    ],
    "char": "𞋿",
    "insertMath": "rupee.wancho",
    "insertCode": "sym.rupee.wancho"
  },
  {
    "name": "shekel",
    "base": "shekel",
    "modifiers": [],
    "char": "₪",
    "insertMath": "shekel",
    "insertCode": "sym.shekel"
  },
  {
    "name": "som",
    "base": "som",
    "modifiers": [],
    "char": "⃀",
    "insertMath": "som",
    "insertCode": "sym.som"
  },
  {
    "name": "taka",
    "base": "taka",
    "modifiers": [],
    "char": "৳",
    "insertMath": "taka",
    "insertCode": "sym.taka"
  },
  {
    "name": "taman",
    "base": "taman",
    "modifiers": [],
    "char": "߿",
    "insertMath": "taman",
    "insertCode": "sym.taman"
  },
  {
    "name": "tenge",
    "base": "tenge",
    "modifiers": [],
    "char": "₸",
    "insertMath": "tenge",
    "insertCode": "sym.tenge"
  },
  {
    "name": "togrog",
    "base": "togrog",
    "modifiers": [],
    "char": "₮",
    "insertMath": "togrog",
    "insertCode": "sym.togrog"
  },
  {
    "name": "won",
    "base": "won",
    "modifiers": [],
    "char": "₩",
    "insertMath": "won",
    "insertCode": "sym.won"
  },
  {
    "name": "yen",
    "base": "yen",
    "modifiers": [],
    "char": "¥",
    "insertMath": "yen",
    "insertCode": "sym.yen"
  },
  {
    "name": "yuan",
    "base": "yuan",
    "modifiers": [],
    "char": "¥",
    "insertMath": "yuan",
    "insertCode": "sym.yuan"
  },
  {
    "name": "ballot",
    "base": "ballot",
    "modifiers": [],
    "char": "☐",
    "insertMath": "ballot",
    "insertCode": "sym.ballot"
  },
  {
    "name": "ballot.cross",
    "base": "ballot",
    "modifiers": [
      "cross"
    ],
    "char": "☒",
    "insertMath": "ballot.cross",
    "insertCode": "sym.ballot.cross"
  },
  {
    "name": "ballot.check",
    "base": "ballot",
    "modifiers": [
      "check"
    ],
    "char": "☑︎",
    "insertMath": "ballot.check",
    "insertCode": "sym.ballot.check"
  },
  {
    "name": "ballot.check.heavy",
    "base": "ballot",
    "modifiers": [
      "check",
      "heavy"
    ],
    "char": "🗹",
    "insertMath": "ballot.check.heavy",
    "insertCode": "sym.ballot.check.heavy"
  },
  {
    "name": "checkmark",
    "base": "checkmark",
    "modifiers": [],
    "char": "✓",
    "insertMath": "checkmark",
    "insertCode": "sym.checkmark"
  },
  {
    "name": "checkmark.light",
    "base": "checkmark",
    "modifiers": [
      "light"
    ],
    "char": "🗸",
    "insertMath": "checkmark.light",
    "insertCode": "sym.checkmark.light"
  },
  {
    "name": "checkmark.heavy",
    "base": "checkmark",
    "modifiers": [
      "heavy"
    ],
    "char": "✔︎",
    "insertMath": "checkmark.heavy",
    "insertCode": "sym.checkmark.heavy"
  },
  {
    "name": "crossmark",
    "base": "crossmark",
    "modifiers": [],
    "char": "✗",
    "insertMath": "crossmark",
    "insertCode": "sym.crossmark"
  },
  {
    "name": "crossmark.heavy",
    "base": "crossmark",
    "modifiers": [
      "heavy"
    ],
    "char": "✘",
    "insertMath": "crossmark.heavy",
    "insertCode": "sym.crossmark.heavy"
  },
  {
    "name": "floral",
    "base": "floral",
    "modifiers": [],
    "char": "❦",
    "insertMath": "floral",
    "insertCode": "sym.floral"
  },
  {
    "name": "floral.l",
    "base": "floral",
    "modifiers": [
      "l"
    ],
    "char": "☙",
    "insertMath": "floral.l",
    "insertCode": "sym.floral.l"
  },
  {
    "name": "floral.r",
    "base": "floral",
    "modifiers": [
      "r"
    ],
    "char": "❧",
    "insertMath": "floral.r",
    "insertCode": "sym.floral.r"
  },
  {
    "name": "refmark",
    "base": "refmark",
    "modifiers": [],
    "char": "※",
    "insertMath": "refmark",
    "insertCode": "sym.refmark"
  },
  {
    "name": "cc",
    "base": "cc",
    "modifiers": [],
    "char": "🅭",
    "insertMath": "cc",
    "insertCode": "sym.cc"
  },
  {
    "name": "cc.by",
    "base": "cc",
    "modifiers": [
      "by"
    ],
    "char": "🅯",
    "insertMath": "cc.by",
    "insertCode": "sym.cc.by"
  },
  {
    "name": "cc.nc",
    "base": "cc",
    "modifiers": [
      "nc"
    ],
    "char": "🄏",
    "insertMath": "cc.nc",
    "insertCode": "sym.cc.nc"
  },
  {
    "name": "cc.nd",
    "base": "cc",
    "modifiers": [
      "nd"
    ],
    "char": "⊜",
    "insertMath": "cc.nd",
    "insertCode": "sym.cc.nd"
  },
  {
    "name": "cc.public",
    "base": "cc",
    "modifiers": [
      "public"
    ],
    "char": "🅮",
    "insertMath": "cc.public",
    "insertCode": "sym.cc.public"
  },
  {
    "name": "cc.sa",
    "base": "cc",
    "modifiers": [
      "sa"
    ],
    "char": "🄎",
    "insertMath": "cc.sa",
    "insertCode": "sym.cc.sa"
  },
  {
    "name": "cc.zero",
    "base": "cc",
    "modifiers": [
      "zero"
    ],
    "char": "🄍",
    "insertMath": "cc.zero",
    "insertCode": "sym.cc.zero"
  },
  {
    "name": "copyright",
    "base": "copyright",
    "modifiers": [],
    "char": "©︎",
    "insertMath": "copyright",
    "insertCode": "sym.copyright"
  },
  {
    "name": "copyright.sound",
    "base": "copyright",
    "modifiers": [
      "sound"
    ],
    "char": "℗",
    "insertMath": "copyright.sound",
    "insertCode": "sym.copyright.sound"
  },
  {
    "name": "copyleft",
    "base": "copyleft",
    "modifiers": [],
    "char": "🄯",
    "insertMath": "copyleft",
    "insertCode": "sym.copyleft"
  },
  {
    "name": "trademark",
    "base": "trademark",
    "modifiers": [],
    "char": "™︎",
    "insertMath": "trademark",
    "insertCode": "sym.trademark"
  },
  {
    "name": "trademark.registered",
    "base": "trademark",
    "modifiers": [
      "registered"
    ],
    "char": "®︎",
    "insertMath": "trademark.registered",
    "insertCode": "sym.trademark.registered"
  },
  {
    "name": "trademark.service",
    "base": "trademark",
    "modifiers": [
      "service"
    ],
    "char": "℠",
    "insertMath": "trademark.service",
    "insertCode": "sym.trademark.service"
  },
  {
    "name": "maltese",
    "base": "maltese",
    "modifiers": [],
    "char": "✠",
    "insertMath": "maltese",
    "insertCode": "sym.maltese"
  },
  {
    "name": "suit.club.filled",
    "base": "suit",
    "modifiers": [
      "club",
      "filled"
    ],
    "char": "♣︎",
    "insertMath": "suit.club.filled",
    "insertCode": "sym.suit.club.filled"
  },
  {
    "name": "suit",
    "base": "suit",
    "modifiers": [],
    "char": "♣︎",
    "insertMath": "suit",
    "insertCode": "sym.suit"
  },
  {
    "name": "suit.club.stroked",
    "base": "suit",
    "modifiers": [
      "club",
      "stroked"
    ],
    "char": "♧",
    "insertMath": "suit.club.stroked",
    "insertCode": "sym.suit.club.stroked"
  },
  {
    "name": "suit.diamond.filled",
    "base": "suit",
    "modifiers": [
      "diamond",
      "filled"
    ],
    "char": "♦︎",
    "insertMath": "suit.diamond.filled",
    "insertCode": "sym.suit.diamond.filled"
  },
  {
    "name": "suit.diamond.stroked",
    "base": "suit",
    "modifiers": [
      "diamond",
      "stroked"
    ],
    "char": "♢",
    "insertMath": "suit.diamond.stroked",
    "insertCode": "sym.suit.diamond.stroked"
  },
  {
    "name": "suit.heart.filled",
    "base": "suit",
    "modifiers": [
      "heart",
      "filled"
    ],
    "char": "♥︎",
    "insertMath": "suit.heart.filled",
    "insertCode": "sym.suit.heart.filled"
  },
  {
    "name": "suit.heart.stroked",
    "base": "suit",
    "modifiers": [
      "heart",
      "stroked"
    ],
    "char": "♡",
    "insertMath": "suit.heart.stroked",
    "insertCode": "sym.suit.heart.stroked"
  },
  {
    "name": "suit.spade.filled",
    "base": "suit",
    "modifiers": [
      "spade",
      "filled"
    ],
    "char": "♠︎",
    "insertMath": "suit.spade.filled",
    "insertCode": "sym.suit.spade.filled"
  },
  {
    "name": "suit.spade.stroked",
    "base": "suit",
    "modifiers": [
      "spade",
      "stroked"
    ],
    "char": "♤",
    "insertMath": "suit.spade.stroked",
    "insertCode": "sym.suit.spade.stroked"
  },
  {
    "name": "note.up",
    "base": "note",
    "modifiers": [
      "up"
    ],
    "char": "🎜",
    "insertMath": "note.up",
    "insertCode": "sym.note.up"
  },
  {
    "name": "note",
    "base": "note",
    "modifiers": [],
    "char": "🎜",
    "insertMath": "note",
    "insertCode": "sym.note"
  },
  {
    "name": "note.down",
    "base": "note",
    "modifiers": [
      "down"
    ],
    "char": "🎝",
    "insertMath": "note.down",
    "insertCode": "sym.note.down"
  },
  {
    "name": "note.whole",
    "base": "note",
    "modifiers": [
      "whole"
    ],
    "char": "𝅝",
    "insertMath": "note.whole",
    "insertCode": "sym.note.whole"
  },
  {
    "name": "note.half",
    "base": "note",
    "modifiers": [
      "half"
    ],
    "char": "𝅗𝅥",
    "insertMath": "note.half",
    "insertCode": "sym.note.half"
  },
  {
    "name": "note.quarter",
    "base": "note",
    "modifiers": [
      "quarter"
    ],
    "char": "𝅘𝅥",
    "insertMath": "note.quarter",
    "insertCode": "sym.note.quarter"
  },
  {
    "name": "note.quarter.alt",
    "base": "note",
    "modifiers": [
      "quarter",
      "alt"
    ],
    "char": "♩",
    "insertMath": "note.quarter.alt",
    "insertCode": "sym.note.quarter.alt"
  },
  {
    "name": "note.eighth",
    "base": "note",
    "modifiers": [
      "eighth"
    ],
    "char": "𝅘𝅥𝅮",
    "insertMath": "note.eighth",
    "insertCode": "sym.note.eighth"
  },
  {
    "name": "note.eighth.alt",
    "base": "note",
    "modifiers": [
      "eighth",
      "alt"
    ],
    "char": "♪",
    "insertMath": "note.eighth.alt",
    "insertCode": "sym.note.eighth.alt"
  },
  {
    "name": "note.eighth.beamed",
    "base": "note",
    "modifiers": [
      "eighth",
      "beamed"
    ],
    "char": "♫",
    "insertMath": "note.eighth.beamed",
    "insertCode": "sym.note.eighth.beamed"
  },
  {
    "name": "note.sixteenth",
    "base": "note",
    "modifiers": [
      "sixteenth"
    ],
    "char": "𝅘𝅥𝅯",
    "insertMath": "note.sixteenth",
    "insertCode": "sym.note.sixteenth"
  },
  {
    "name": "note.sixteenth.beamed",
    "base": "note",
    "modifiers": [
      "sixteenth",
      "beamed"
    ],
    "char": "♬",
    "insertMath": "note.sixteenth.beamed",
    "insertCode": "sym.note.sixteenth.beamed"
  },
  {
    "name": "note.grace",
    "base": "note",
    "modifiers": [
      "grace"
    ],
    "char": "𝆕",
    "insertMath": "note.grace",
    "insertCode": "sym.note.grace"
  },
  {
    "name": "note.grace.slash",
    "base": "note",
    "modifiers": [
      "grace",
      "slash"
    ],
    "char": "𝆔",
    "insertMath": "note.grace.slash",
    "insertCode": "sym.note.grace.slash"
  },
  {
    "name": "rest.whole",
    "base": "rest",
    "modifiers": [
      "whole"
    ],
    "char": "𝄻",
    "insertMath": "rest.whole",
    "insertCode": "sym.rest.whole"
  },
  {
    "name": "rest",
    "base": "rest",
    "modifiers": [],
    "char": "𝄻",
    "insertMath": "rest",
    "insertCode": "sym.rest"
  },
  {
    "name": "rest.multiple",
    "base": "rest",
    "modifiers": [
      "multiple"
    ],
    "char": "𝄺",
    "insertMath": "rest.multiple",
    "insertCode": "sym.rest.multiple"
  },
  {
    "name": "rest.multiple.measure",
    "base": "rest",
    "modifiers": [
      "multiple",
      "measure"
    ],
    "char": "𝄩",
    "insertMath": "rest.multiple.measure",
    "insertCode": "sym.rest.multiple.measure"
  },
  {
    "name": "rest.half",
    "base": "rest",
    "modifiers": [
      "half"
    ],
    "char": "𝄼",
    "insertMath": "rest.half",
    "insertCode": "sym.rest.half"
  },
  {
    "name": "rest.quarter",
    "base": "rest",
    "modifiers": [
      "quarter"
    ],
    "char": "𝄽",
    "insertMath": "rest.quarter",
    "insertCode": "sym.rest.quarter"
  },
  {
    "name": "rest.eighth",
    "base": "rest",
    "modifiers": [
      "eighth"
    ],
    "char": "𝄾",
    "insertMath": "rest.eighth",
    "insertCode": "sym.rest.eighth"
  },
  {
    "name": "rest.sixteenth",
    "base": "rest",
    "modifiers": [
      "sixteenth"
    ],
    "char": "𝄿",
    "insertMath": "rest.sixteenth",
    "insertCode": "sym.rest.sixteenth"
  },
  {
    "name": "natural",
    "base": "natural",
    "modifiers": [],
    "char": "♮",
    "insertMath": "natural",
    "insertCode": "sym.natural"
  },
  {
    "name": "natural.t",
    "base": "natural",
    "modifiers": [
      "t"
    ],
    "char": "𝄮",
    "insertMath": "natural.t",
    "insertCode": "sym.natural.t"
  },
  {
    "name": "natural.b",
    "base": "natural",
    "modifiers": [
      "b"
    ],
    "char": "𝄯",
    "insertMath": "natural.b",
    "insertCode": "sym.natural.b"
  },
  {
    "name": "flat",
    "base": "flat",
    "modifiers": [],
    "char": "♭",
    "insertMath": "flat",
    "insertCode": "sym.flat"
  },
  {
    "name": "flat.t",
    "base": "flat",
    "modifiers": [
      "t"
    ],
    "char": "𝄬",
    "insertMath": "flat.t",
    "insertCode": "sym.flat.t"
  },
  {
    "name": "flat.b",
    "base": "flat",
    "modifiers": [
      "b"
    ],
    "char": "𝄭",
    "insertMath": "flat.b",
    "insertCode": "sym.flat.b"
  },
  {
    "name": "flat.double",
    "base": "flat",
    "modifiers": [
      "double"
    ],
    "char": "𝄫",
    "insertMath": "flat.double",
    "insertCode": "sym.flat.double"
  },
  {
    "name": "flat.quarter",
    "base": "flat",
    "modifiers": [
      "quarter"
    ],
    "char": "𝄳",
    "insertMath": "flat.quarter",
    "insertCode": "sym.flat.quarter"
  },
  {
    "name": "sharp",
    "base": "sharp",
    "modifiers": [],
    "char": "♯",
    "insertMath": "sharp",
    "insertCode": "sym.sharp"
  },
  {
    "name": "sharp.t",
    "base": "sharp",
    "modifiers": [
      "t"
    ],
    "char": "𝄰",
    "insertMath": "sharp.t",
    "insertCode": "sym.sharp.t"
  },
  {
    "name": "sharp.b",
    "base": "sharp",
    "modifiers": [
      "b"
    ],
    "char": "𝄱",
    "insertMath": "sharp.b",
    "insertCode": "sym.sharp.b"
  },
  {
    "name": "sharp.double",
    "base": "sharp",
    "modifiers": [
      "double"
    ],
    "char": "𝄪",
    "insertMath": "sharp.double",
    "insertCode": "sym.sharp.double"
  },
  {
    "name": "sharp.quarter",
    "base": "sharp",
    "modifiers": [
      "quarter"
    ],
    "char": "𝄲",
    "insertMath": "sharp.quarter",
    "insertCode": "sym.sharp.quarter"
  },
  {
    "name": "bullet",
    "base": "bullet",
    "modifiers": [],
    "char": "•",
    "insertMath": "bullet",
    "insertCode": "sym.bullet"
  },
  {
    "name": "bullet.op",
    "base": "bullet",
    "modifiers": [
      "op"
    ],
    "char": "∙",
    "insertMath": "bullet.op",
    "insertCode": "sym.bullet.op"
  },
  {
    "name": "bullet.o",
    "base": "bullet",
    "modifiers": [
      "o"
    ],
    "char": "⦿",
    "insertMath": "bullet.o",
    "insertCode": "sym.bullet.o"
  },
  {
    "name": "bullet.stroked",
    "base": "bullet",
    "modifiers": [
      "stroked"
    ],
    "char": "◦",
    "insertMath": "bullet.stroked",
    "insertCode": "sym.bullet.stroked"
  },
  {
    "name": "bullet.stroked.o",
    "base": "bullet",
    "modifiers": [
      "stroked",
      "o"
    ],
    "char": "⦾",
    "insertMath": "bullet.stroked.o",
    "insertCode": "sym.bullet.stroked.o"
  },
  {
    "name": "bullet.hole",
    "base": "bullet",
    "modifiers": [
      "hole"
    ],
    "char": "◘",
    "insertMath": "bullet.hole",
    "insertCode": "sym.bullet.hole"
  },
  {
    "name": "bullet.hyph",
    "base": "bullet",
    "modifiers": [
      "hyph"
    ],
    "char": "⁃",
    "insertMath": "bullet.hyph",
    "insertCode": "sym.bullet.hyph"
  },
  {
    "name": "bullet.tri",
    "base": "bullet",
    "modifiers": [
      "tri"
    ],
    "char": "‣",
    "insertMath": "bullet.tri",
    "insertCode": "sym.bullet.tri"
  },
  {
    "name": "bullet.l",
    "base": "bullet",
    "modifiers": [
      "l"
    ],
    "char": "⁌",
    "insertMath": "bullet.l",
    "insertCode": "sym.bullet.l"
  },
  {
    "name": "bullet.r",
    "base": "bullet",
    "modifiers": [
      "r"
    ],
    "char": "⁍",
    "insertMath": "bullet.r",
    "insertCode": "sym.bullet.r"
  },
  {
    "name": "circle.stroked",
    "base": "circle",
    "modifiers": [
      "stroked"
    ],
    "char": "○",
    "insertMath": "circle.stroked",
    "insertCode": "sym.circle.stroked"
  },
  {
    "name": "circle",
    "base": "circle",
    "modifiers": [],
    "char": "○",
    "insertMath": "circle",
    "insertCode": "sym.circle"
  },
  {
    "name": "circle.stroked.tiny",
    "base": "circle",
    "modifiers": [
      "stroked",
      "tiny"
    ],
    "char": "∘",
    "insertMath": "circle.stroked.tiny",
    "insertCode": "sym.circle.stroked.tiny"
  },
  {
    "name": "circle.stroked.small",
    "base": "circle",
    "modifiers": [
      "stroked",
      "small"
    ],
    "char": "⚬",
    "insertMath": "circle.stroked.small",
    "insertCode": "sym.circle.stroked.small"
  },
  {
    "name": "circle.stroked.big",
    "base": "circle",
    "modifiers": [
      "stroked",
      "big"
    ],
    "char": "◯",
    "insertMath": "circle.stroked.big",
    "insertCode": "sym.circle.stroked.big"
  },
  {
    "name": "circle.filled",
    "base": "circle",
    "modifiers": [
      "filled"
    ],
    "char": "●",
    "insertMath": "circle.filled",
    "insertCode": "sym.circle.filled"
  },
  {
    "name": "circle.filled.tiny",
    "base": "circle",
    "modifiers": [
      "filled",
      "tiny"
    ],
    "char": "⦁",
    "insertMath": "circle.filled.tiny",
    "insertCode": "sym.circle.filled.tiny"
  },
  {
    "name": "circle.filled.small",
    "base": "circle",
    "modifiers": [
      "filled",
      "small"
    ],
    "char": "∙",
    "insertMath": "circle.filled.small",
    "insertCode": "sym.circle.filled.small"
  },
  {
    "name": "circle.filled.big",
    "base": "circle",
    "modifiers": [
      "filled",
      "big"
    ],
    "char": "⬤",
    "insertMath": "circle.filled.big",
    "insertCode": "sym.circle.filled.big"
  },
  {
    "name": "circle.dotted",
    "base": "circle",
    "modifiers": [
      "dotted"
    ],
    "char": "◌",
    "insertMath": "circle.dotted",
    "insertCode": "sym.circle.dotted"
  },
  {
    "name": "ellipse.stroked.h",
    "base": "ellipse",
    "modifiers": [
      "stroked",
      "h"
    ],
    "char": "⬭",
    "insertMath": "ellipse.stroked.h",
    "insertCode": "sym.ellipse.stroked.h"
  },
  {
    "name": "ellipse",
    "base": "ellipse",
    "modifiers": [],
    "char": "⬭",
    "insertMath": "ellipse",
    "insertCode": "sym.ellipse"
  },
  {
    "name": "ellipse.stroked.v",
    "base": "ellipse",
    "modifiers": [
      "stroked",
      "v"
    ],
    "char": "⬯",
    "insertMath": "ellipse.stroked.v",
    "insertCode": "sym.ellipse.stroked.v"
  },
  {
    "name": "ellipse.filled.h",
    "base": "ellipse",
    "modifiers": [
      "filled",
      "h"
    ],
    "char": "⬬",
    "insertMath": "ellipse.filled.h",
    "insertCode": "sym.ellipse.filled.h"
  },
  {
    "name": "ellipse.filled.v",
    "base": "ellipse",
    "modifiers": [
      "filled",
      "v"
    ],
    "char": "⬮",
    "insertMath": "ellipse.filled.v",
    "insertCode": "sym.ellipse.filled.v"
  },
  {
    "name": "triangle.stroked.t",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "t"
    ],
    "char": "△",
    "insertMath": "triangle.stroked.t",
    "insertCode": "sym.triangle.stroked.t"
  },
  {
    "name": "triangle",
    "base": "triangle",
    "modifiers": [],
    "char": "△",
    "insertMath": "triangle",
    "insertCode": "sym.triangle"
  },
  {
    "name": "triangle.stroked.b",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "b"
    ],
    "char": "▽",
    "insertMath": "triangle.stroked.b",
    "insertCode": "sym.triangle.stroked.b"
  },
  {
    "name": "triangle.stroked.r",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "r"
    ],
    "char": "▷",
    "insertMath": "triangle.stroked.r",
    "insertCode": "sym.triangle.stroked.r"
  },
  {
    "name": "triangle.stroked.l",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "l"
    ],
    "char": "◁",
    "insertMath": "triangle.stroked.l",
    "insertCode": "sym.triangle.stroked.l"
  },
  {
    "name": "triangle.stroked.bl",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "bl"
    ],
    "char": "◺",
    "insertMath": "triangle.stroked.bl",
    "insertCode": "sym.triangle.stroked.bl"
  },
  {
    "name": "triangle.stroked.br",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "br"
    ],
    "char": "◿",
    "insertMath": "triangle.stroked.br",
    "insertCode": "sym.triangle.stroked.br"
  },
  {
    "name": "triangle.stroked.tl",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "tl"
    ],
    "char": "◸",
    "insertMath": "triangle.stroked.tl",
    "insertCode": "sym.triangle.stroked.tl"
  },
  {
    "name": "triangle.stroked.tr",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "tr"
    ],
    "char": "◹",
    "insertMath": "triangle.stroked.tr",
    "insertCode": "sym.triangle.stroked.tr"
  },
  {
    "name": "triangle.stroked.small.t",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "small",
      "t"
    ],
    "char": "▵",
    "insertMath": "triangle.stroked.small.t",
    "insertCode": "sym.triangle.stroked.small.t"
  },
  {
    "name": "triangle.stroked.small.b",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "small",
      "b"
    ],
    "char": "▿",
    "insertMath": "triangle.stroked.small.b",
    "insertCode": "sym.triangle.stroked.small.b"
  },
  {
    "name": "triangle.stroked.small.r",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "small",
      "r"
    ],
    "char": "▹",
    "insertMath": "triangle.stroked.small.r",
    "insertCode": "sym.triangle.stroked.small.r"
  },
  {
    "name": "triangle.stroked.small.l",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "small",
      "l"
    ],
    "char": "◃",
    "insertMath": "triangle.stroked.small.l",
    "insertCode": "sym.triangle.stroked.small.l"
  },
  {
    "name": "triangle.stroked.rounded",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "rounded"
    ],
    "char": "🛆",
    "insertMath": "triangle.stroked.rounded",
    "insertCode": "sym.triangle.stroked.rounded"
  },
  {
    "name": "triangle.stroked.nested",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "nested"
    ],
    "char": "⟁",
    "insertMath": "triangle.stroked.nested",
    "insertCode": "sym.triangle.stroked.nested"
  },
  {
    "name": "triangle.stroked.dot",
    "base": "triangle",
    "modifiers": [
      "stroked",
      "dot"
    ],
    "char": "◬",
    "insertMath": "triangle.stroked.dot",
    "insertCode": "sym.triangle.stroked.dot"
  },
  {
    "name": "triangle.filled.t",
    "base": "triangle",
    "modifiers": [
      "filled",
      "t"
    ],
    "char": "▲",
    "insertMath": "triangle.filled.t",
    "insertCode": "sym.triangle.filled.t"
  },
  {
    "name": "triangle.filled.b",
    "base": "triangle",
    "modifiers": [
      "filled",
      "b"
    ],
    "char": "▼",
    "insertMath": "triangle.filled.b",
    "insertCode": "sym.triangle.filled.b"
  },
  {
    "name": "triangle.filled.r",
    "base": "triangle",
    "modifiers": [
      "filled",
      "r"
    ],
    "char": "▶︎",
    "insertMath": "triangle.filled.r",
    "insertCode": "sym.triangle.filled.r"
  },
  {
    "name": "triangle.filled.l",
    "base": "triangle",
    "modifiers": [
      "filled",
      "l"
    ],
    "char": "◀︎",
    "insertMath": "triangle.filled.l",
    "insertCode": "sym.triangle.filled.l"
  },
  {
    "name": "triangle.filled.bl",
    "base": "triangle",
    "modifiers": [
      "filled",
      "bl"
    ],
    "char": "◣",
    "insertMath": "triangle.filled.bl",
    "insertCode": "sym.triangle.filled.bl"
  },
  {
    "name": "triangle.filled.br",
    "base": "triangle",
    "modifiers": [
      "filled",
      "br"
    ],
    "char": "◢",
    "insertMath": "triangle.filled.br",
    "insertCode": "sym.triangle.filled.br"
  },
  {
    "name": "triangle.filled.tl",
    "base": "triangle",
    "modifiers": [
      "filled",
      "tl"
    ],
    "char": "◤",
    "insertMath": "triangle.filled.tl",
    "insertCode": "sym.triangle.filled.tl"
  },
  {
    "name": "triangle.filled.tr",
    "base": "triangle",
    "modifiers": [
      "filled",
      "tr"
    ],
    "char": "◥",
    "insertMath": "triangle.filled.tr",
    "insertCode": "sym.triangle.filled.tr"
  },
  {
    "name": "triangle.filled.small.t",
    "base": "triangle",
    "modifiers": [
      "filled",
      "small",
      "t"
    ],
    "char": "▴",
    "insertMath": "triangle.filled.small.t",
    "insertCode": "sym.triangle.filled.small.t"
  },
  {
    "name": "triangle.filled.small.b",
    "base": "triangle",
    "modifiers": [
      "filled",
      "small",
      "b"
    ],
    "char": "▾",
    "insertMath": "triangle.filled.small.b",
    "insertCode": "sym.triangle.filled.small.b"
  },
  {
    "name": "triangle.filled.small.r",
    "base": "triangle",
    "modifiers": [
      "filled",
      "small",
      "r"
    ],
    "char": "▸",
    "insertMath": "triangle.filled.small.r",
    "insertCode": "sym.triangle.filled.small.r"
  },
  {
    "name": "triangle.filled.small.l",
    "base": "triangle",
    "modifiers": [
      "filled",
      "small",
      "l"
    ],
    "char": "◂",
    "insertMath": "triangle.filled.small.l",
    "insertCode": "sym.triangle.filled.small.l"
  },
  {
    "name": "square.stroked",
    "base": "square",
    "modifiers": [
      "stroked"
    ],
    "char": "□",
    "insertMath": "square.stroked",
    "insertCode": "sym.square.stroked"
  },
  {
    "name": "square",
    "base": "square",
    "modifiers": [],
    "char": "□",
    "insertMath": "square",
    "insertCode": "sym.square"
  },
  {
    "name": "square.stroked.tiny",
    "base": "square",
    "modifiers": [
      "stroked",
      "tiny"
    ],
    "char": "▫︎",
    "insertMath": "square.stroked.tiny",
    "insertCode": "sym.square.stroked.tiny"
  },
  {
    "name": "square.stroked.small",
    "base": "square",
    "modifiers": [
      "stroked",
      "small"
    ],
    "char": "◽︎",
    "insertMath": "square.stroked.small",
    "insertCode": "sym.square.stroked.small"
  },
  {
    "name": "square.stroked.medium",
    "base": "square",
    "modifiers": [
      "stroked",
      "medium"
    ],
    "char": "◻︎",
    "insertMath": "square.stroked.medium",
    "insertCode": "sym.square.stroked.medium"
  },
  {
    "name": "square.stroked.big",
    "base": "square",
    "modifiers": [
      "stroked",
      "big"
    ],
    "char": "⬜︎",
    "insertMath": "square.stroked.big",
    "insertCode": "sym.square.stroked.big"
  },
  {
    "name": "square.stroked.dotted",
    "base": "square",
    "modifiers": [
      "stroked",
      "dotted"
    ],
    "char": "⬚",
    "insertMath": "square.stroked.dotted",
    "insertCode": "sym.square.stroked.dotted"
  },
  {
    "name": "square.stroked.rounded",
    "base": "square",
    "modifiers": [
      "stroked",
      "rounded"
    ],
    "char": "▢",
    "insertMath": "square.stroked.rounded",
    "insertCode": "sym.square.stroked.rounded"
  },
  {
    "name": "square.filled",
    "base": "square",
    "modifiers": [
      "filled"
    ],
    "char": "■",
    "insertMath": "square.filled",
    "insertCode": "sym.square.filled"
  },
  {
    "name": "square.filled.tiny",
    "base": "square",
    "modifiers": [
      "filled",
      "tiny"
    ],
    "char": "▪︎",
    "insertMath": "square.filled.tiny",
    "insertCode": "sym.square.filled.tiny"
  },
  {
    "name": "square.filled.small",
    "base": "square",
    "modifiers": [
      "filled",
      "small"
    ],
    "char": "◾︎",
    "insertMath": "square.filled.small",
    "insertCode": "sym.square.filled.small"
  },
  {
    "name": "square.filled.medium",
    "base": "square",
    "modifiers": [
      "filled",
      "medium"
    ],
    "char": "◼︎",
    "insertMath": "square.filled.medium",
    "insertCode": "sym.square.filled.medium"
  },
  {
    "name": "square.filled.big",
    "base": "square",
    "modifiers": [
      "filled",
      "big"
    ],
    "char": "⬛︎",
    "insertMath": "square.filled.big",
    "insertCode": "sym.square.filled.big"
  },
  {
    "name": "rect.stroked.h",
    "base": "rect",
    "modifiers": [
      "stroked",
      "h"
    ],
    "char": "▭",
    "insertMath": "rect.stroked.h",
    "insertCode": "sym.rect.stroked.h"
  },
  {
    "name": "rect",
    "base": "rect",
    "modifiers": [],
    "char": "▭",
    "insertMath": "rect",
    "insertCode": "sym.rect"
  },
  {
    "name": "rect.stroked.v",
    "base": "rect",
    "modifiers": [
      "stroked",
      "v"
    ],
    "char": "▯",
    "insertMath": "rect.stroked.v",
    "insertCode": "sym.rect.stroked.v"
  },
  {
    "name": "rect.filled.h",
    "base": "rect",
    "modifiers": [
      "filled",
      "h"
    ],
    "char": "▬",
    "insertMath": "rect.filled.h",
    "insertCode": "sym.rect.filled.h"
  },
  {
    "name": "rect.filled.v",
    "base": "rect",
    "modifiers": [
      "filled",
      "v"
    ],
    "char": "▮",
    "insertMath": "rect.filled.v",
    "insertCode": "sym.rect.filled.v"
  },
  {
    "name": "penta.stroked",
    "base": "penta",
    "modifiers": [
      "stroked"
    ],
    "char": "⬠",
    "insertMath": "penta.stroked",
    "insertCode": "sym.penta.stroked"
  },
  {
    "name": "penta",
    "base": "penta",
    "modifiers": [],
    "char": "⬠",
    "insertMath": "penta",
    "insertCode": "sym.penta"
  },
  {
    "name": "penta.filled",
    "base": "penta",
    "modifiers": [
      "filled"
    ],
    "char": "⬟",
    "insertMath": "penta.filled",
    "insertCode": "sym.penta.filled"
  },
  {
    "name": "hexa.stroked",
    "base": "hexa",
    "modifiers": [
      "stroked"
    ],
    "char": "⬡",
    "insertMath": "hexa.stroked",
    "insertCode": "sym.hexa.stroked"
  },
  {
    "name": "hexa",
    "base": "hexa",
    "modifiers": [],
    "char": "⬡",
    "insertMath": "hexa",
    "insertCode": "sym.hexa"
  },
  {
    "name": "hexa.filled",
    "base": "hexa",
    "modifiers": [
      "filled"
    ],
    "char": "⬢",
    "insertMath": "hexa.filled",
    "insertCode": "sym.hexa.filled"
  },
  {
    "name": "diamond.stroked",
    "base": "diamond",
    "modifiers": [
      "stroked"
    ],
    "char": "◇",
    "insertMath": "diamond.stroked",
    "insertCode": "sym.diamond.stroked"
  },
  {
    "name": "diamond",
    "base": "diamond",
    "modifiers": [],
    "char": "◇",
    "insertMath": "diamond",
    "insertCode": "sym.diamond"
  },
  {
    "name": "diamond.stroked.small",
    "base": "diamond",
    "modifiers": [
      "stroked",
      "small"
    ],
    "char": "⋄",
    "insertMath": "diamond.stroked.small",
    "insertCode": "sym.diamond.stroked.small"
  },
  {
    "name": "diamond.stroked.medium",
    "base": "diamond",
    "modifiers": [
      "stroked",
      "medium"
    ],
    "char": "⬦",
    "insertMath": "diamond.stroked.medium",
    "insertCode": "sym.diamond.stroked.medium"
  },
  {
    "name": "diamond.stroked.dot",
    "base": "diamond",
    "modifiers": [
      "stroked",
      "dot"
    ],
    "char": "⟐",
    "insertMath": "diamond.stroked.dot",
    "insertCode": "sym.diamond.stroked.dot"
  },
  {
    "name": "diamond.filled",
    "base": "diamond",
    "modifiers": [
      "filled"
    ],
    "char": "◆",
    "insertMath": "diamond.filled",
    "insertCode": "sym.diamond.filled"
  },
  {
    "name": "diamond.filled.medium",
    "base": "diamond",
    "modifiers": [
      "filled",
      "medium"
    ],
    "char": "⬥",
    "insertMath": "diamond.filled.medium",
    "insertCode": "sym.diamond.filled.medium"
  },
  {
    "name": "diamond.filled.small",
    "base": "diamond",
    "modifiers": [
      "filled",
      "small"
    ],
    "char": "⬩",
    "insertMath": "diamond.filled.small",
    "insertCode": "sym.diamond.filled.small"
  },
  {
    "name": "lozenge.stroked",
    "base": "lozenge",
    "modifiers": [
      "stroked"
    ],
    "char": "◊",
    "insertMath": "lozenge.stroked",
    "insertCode": "sym.lozenge.stroked"
  },
  {
    "name": "lozenge",
    "base": "lozenge",
    "modifiers": [],
    "char": "◊",
    "insertMath": "lozenge",
    "insertCode": "sym.lozenge"
  },
  {
    "name": "lozenge.stroked.small",
    "base": "lozenge",
    "modifiers": [
      "stroked",
      "small"
    ],
    "char": "⬫",
    "insertMath": "lozenge.stroked.small",
    "insertCode": "sym.lozenge.stroked.small"
  },
  {
    "name": "lozenge.stroked.medium",
    "base": "lozenge",
    "modifiers": [
      "stroked",
      "medium"
    ],
    "char": "⬨",
    "insertMath": "lozenge.stroked.medium",
    "insertCode": "sym.lozenge.stroked.medium"
  },
  {
    "name": "lozenge.filled",
    "base": "lozenge",
    "modifiers": [
      "filled"
    ],
    "char": "⧫",
    "insertMath": "lozenge.filled",
    "insertCode": "sym.lozenge.filled"
  },
  {
    "name": "lozenge.filled.small",
    "base": "lozenge",
    "modifiers": [
      "filled",
      "small"
    ],
    "char": "⬪",
    "insertMath": "lozenge.filled.small",
    "insertCode": "sym.lozenge.filled.small"
  },
  {
    "name": "lozenge.filled.medium",
    "base": "lozenge",
    "modifiers": [
      "filled",
      "medium"
    ],
    "char": "⬧",
    "insertMath": "lozenge.filled.medium",
    "insertCode": "sym.lozenge.filled.medium"
  },
  {
    "name": "parallelogram.stroked",
    "base": "parallelogram",
    "modifiers": [
      "stroked"
    ],
    "char": "▱",
    "insertMath": "parallelogram.stroked",
    "insertCode": "sym.parallelogram.stroked"
  },
  {
    "name": "parallelogram",
    "base": "parallelogram",
    "modifiers": [],
    "char": "▱",
    "insertMath": "parallelogram",
    "insertCode": "sym.parallelogram"
  },
  {
    "name": "parallelogram.filled",
    "base": "parallelogram",
    "modifiers": [
      "filled"
    ],
    "char": "▰",
    "insertMath": "parallelogram.filled",
    "insertCode": "sym.parallelogram.filled"
  },
  {
    "name": "star.op",
    "base": "star",
    "modifiers": [
      "op"
    ],
    "char": "⋆",
    "insertMath": "star.op",
    "insertCode": "sym.star.op"
  },
  {
    "name": "star",
    "base": "star",
    "modifiers": [],
    "char": "⋆",
    "insertMath": "star",
    "insertCode": "sym.star"
  },
  {
    "name": "star.stroked",
    "base": "star",
    "modifiers": [
      "stroked"
    ],
    "char": "☆",
    "insertMath": "star.stroked",
    "insertCode": "sym.star.stroked"
  },
  {
    "name": "star.filled",
    "base": "star",
    "modifiers": [
      "filled"
    ],
    "char": "★",
    "insertMath": "star.filled",
    "insertCode": "sym.star.filled"
  },
  {
    "name": "arrow.r",
    "base": "arrow",
    "modifiers": [
      "r"
    ],
    "char": "→",
    "insertMath": "arrow.r",
    "insertCode": "sym.arrow.r"
  },
  {
    "name": "arrow",
    "base": "arrow",
    "modifiers": [],
    "char": "→",
    "insertMath": "arrow",
    "insertCode": "sym.arrow"
  },
  {
    "name": "arrow.r.long.bar",
    "base": "arrow",
    "modifiers": [
      "r",
      "long",
      "bar"
    ],
    "char": "⟼",
    "insertMath": "arrow.r.long.bar",
    "insertCode": "sym.arrow.r.long.bar"
  },
  {
    "name": "arrow.r.bar",
    "base": "arrow",
    "modifiers": [
      "r",
      "bar"
    ],
    "char": "↦",
    "insertMath": "arrow.r.bar",
    "insertCode": "sym.arrow.r.bar"
  },
  {
    "name": "arrow.r.curve",
    "base": "arrow",
    "modifiers": [
      "r",
      "curve"
    ],
    "char": "⤷",
    "insertMath": "arrow.r.curve",
    "insertCode": "sym.arrow.r.curve"
  },
  {
    "name": "arrow.r.turn",
    "base": "arrow",
    "modifiers": [
      "r",
      "turn"
    ],
    "char": "⮎",
    "insertMath": "arrow.r.turn",
    "insertCode": "sym.arrow.r.turn"
  },
  {
    "name": "arrow.r.dashed",
    "base": "arrow",
    "modifiers": [
      "r",
      "dashed"
    ],
    "char": "⇢",
    "insertMath": "arrow.r.dashed",
    "insertCode": "sym.arrow.r.dashed"
  },
  {
    "name": "arrow.r.dotted",
    "base": "arrow",
    "modifiers": [
      "r",
      "dotted"
    ],
    "char": "⤑",
    "insertMath": "arrow.r.dotted",
    "insertCode": "sym.arrow.r.dotted"
  },
  {
    "name": "arrow.r.double",
    "base": "arrow",
    "modifiers": [
      "r",
      "double"
    ],
    "char": "⇒",
    "insertMath": "arrow.r.double",
    "insertCode": "sym.arrow.r.double"
  },
  {
    "name": "arrow.r.double.bar",
    "base": "arrow",
    "modifiers": [
      "r",
      "double",
      "bar"
    ],
    "char": "⤇",
    "insertMath": "arrow.r.double.bar",
    "insertCode": "sym.arrow.r.double.bar"
  },
  {
    "name": "arrow.r.double.long",
    "base": "arrow",
    "modifiers": [
      "r",
      "double",
      "long"
    ],
    "char": "⟹",
    "insertMath": "arrow.r.double.long",
    "insertCode": "sym.arrow.r.double.long"
  },
  {
    "name": "arrow.r.double.long.bar",
    "base": "arrow",
    "modifiers": [
      "r",
      "double",
      "long",
      "bar"
    ],
    "char": "⟾",
    "insertMath": "arrow.r.double.long.bar",
    "insertCode": "sym.arrow.r.double.long.bar"
  },
  {
    "name": "arrow.r.double.not",
    "base": "arrow",
    "modifiers": [
      "r",
      "double",
      "not"
    ],
    "char": "⇏",
    "insertMath": "arrow.r.double.not",
    "insertCode": "sym.arrow.r.double.not"
  },
  {
    "name": "arrow.r.double.struck",
    "base": "arrow",
    "modifiers": [
      "r",
      "double",
      "struck"
    ],
    "char": "⤃",
    "insertMath": "arrow.r.double.struck",
    "insertCode": "sym.arrow.r.double.struck"
  },
  {
    "name": "arrow.r.filled",
    "base": "arrow",
    "modifiers": [
      "r",
      "filled"
    ],
    "char": "➡︎",
    "insertMath": "arrow.r.filled",
    "insertCode": "sym.arrow.r.filled"
  },
  {
    "name": "arrow.r.hook",
    "base": "arrow",
    "modifiers": [
      "r",
      "hook"
    ],
    "char": "↪︎",
    "insertMath": "arrow.r.hook",
    "insertCode": "sym.arrow.r.hook"
  },
  {
    "name": "arrow.r.long",
    "base": "arrow",
    "modifiers": [
      "r",
      "long"
    ],
    "char": "⟶",
    "insertMath": "arrow.r.long",
    "insertCode": "sym.arrow.r.long"
  },
  {
    "name": "arrow.r.long.squiggly",
    "base": "arrow",
    "modifiers": [
      "r",
      "long",
      "squiggly"
    ],
    "char": "⟿",
    "insertMath": "arrow.r.long.squiggly",
    "insertCode": "sym.arrow.r.long.squiggly"
  },
  {
    "name": "arrow.r.loop",
    "base": "arrow",
    "modifiers": [
      "r",
      "loop"
    ],
    "char": "↬",
    "insertMath": "arrow.r.loop",
    "insertCode": "sym.arrow.r.loop"
  },
  {
    "name": "arrow.r.not",
    "base": "arrow",
    "modifiers": [
      "r",
      "not"
    ],
    "char": "↛",
    "insertMath": "arrow.r.not",
    "insertCode": "sym.arrow.r.not"
  },
  {
    "name": "arrow.r.quad",
    "base": "arrow",
    "modifiers": [
      "r",
      "quad"
    ],
    "char": "⭆",
    "insertMath": "arrow.r.quad",
    "insertCode": "sym.arrow.r.quad"
  },
  {
    "name": "arrow.r.squiggly",
    "base": "arrow",
    "modifiers": [
      "r",
      "squiggly"
    ],
    "char": "⇝",
    "insertMath": "arrow.r.squiggly",
    "insertCode": "sym.arrow.r.squiggly"
  },
  {
    "name": "arrow.r.stop",
    "base": "arrow",
    "modifiers": [
      "r",
      "stop"
    ],
    "char": "⇥",
    "insertMath": "arrow.r.stop",
    "insertCode": "sym.arrow.r.stop"
  },
  {
    "name": "arrow.r.stroked",
    "base": "arrow",
    "modifiers": [
      "r",
      "stroked"
    ],
    "char": "⇨",
    "insertMath": "arrow.r.stroked",
    "insertCode": "sym.arrow.r.stroked"
  },
  {
    "name": "arrow.r.struck",
    "base": "arrow",
    "modifiers": [
      "r",
      "struck"
    ],
    "char": "⇸",
    "insertMath": "arrow.r.struck",
    "insertCode": "sym.arrow.r.struck"
  },
  {
    "name": "arrow.r.dstruck",
    "base": "arrow",
    "modifiers": [
      "r",
      "dstruck"
    ],
    "char": "⇻",
    "insertMath": "arrow.r.dstruck",
    "insertCode": "sym.arrow.r.dstruck"
  },
  {
    "name": "arrow.r.tail",
    "base": "arrow",
    "modifiers": [
      "r",
      "tail"
    ],
    "char": "↣",
    "insertMath": "arrow.r.tail",
    "insertCode": "sym.arrow.r.tail"
  },
  {
    "name": "arrow.r.tail.struck",
    "base": "arrow",
    "modifiers": [
      "r",
      "tail",
      "struck"
    ],
    "char": "⤔",
    "insertMath": "arrow.r.tail.struck",
    "insertCode": "sym.arrow.r.tail.struck"
  },
  {
    "name": "arrow.r.tail.dstruck",
    "base": "arrow",
    "modifiers": [
      "r",
      "tail",
      "dstruck"
    ],
    "char": "⤕",
    "insertMath": "arrow.r.tail.dstruck",
    "insertCode": "sym.arrow.r.tail.dstruck"
  },
  {
    "name": "arrow.r.tilde",
    "base": "arrow",
    "modifiers": [
      "r",
      "tilde"
    ],
    "char": "⥲",
    "insertMath": "arrow.r.tilde",
    "insertCode": "sym.arrow.r.tilde"
  },
  {
    "name": "arrow.r.triple",
    "base": "arrow",
    "modifiers": [
      "r",
      "triple"
    ],
    "char": "⇛",
    "insertMath": "arrow.r.triple",
    "insertCode": "sym.arrow.r.triple"
  },
  {
    "name": "arrow.r.twohead",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead"
    ],
    "char": "↠",
    "insertMath": "arrow.r.twohead",
    "insertCode": "sym.arrow.r.twohead"
  },
  {
    "name": "arrow.r.twohead.bar",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "bar"
    ],
    "char": "⤅",
    "insertMath": "arrow.r.twohead.bar",
    "insertCode": "sym.arrow.r.twohead.bar"
  },
  {
    "name": "arrow.r.twohead.struck",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "struck"
    ],
    "char": "⤀",
    "insertMath": "arrow.r.twohead.struck",
    "insertCode": "sym.arrow.r.twohead.struck"
  },
  {
    "name": "arrow.r.twohead.dstruck",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "dstruck"
    ],
    "char": "⤁",
    "insertMath": "arrow.r.twohead.dstruck",
    "insertCode": "sym.arrow.r.twohead.dstruck"
  },
  {
    "name": "arrow.r.twohead.tail",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "tail"
    ],
    "char": "⤖",
    "insertMath": "arrow.r.twohead.tail",
    "insertCode": "sym.arrow.r.twohead.tail"
  },
  {
    "name": "arrow.r.twohead.tail.struck",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "tail",
      "struck"
    ],
    "char": "⤗",
    "insertMath": "arrow.r.twohead.tail.struck",
    "insertCode": "sym.arrow.r.twohead.tail.struck"
  },
  {
    "name": "arrow.r.twohead.tail.dstruck",
    "base": "arrow",
    "modifiers": [
      "r",
      "twohead",
      "tail",
      "dstruck"
    ],
    "char": "⤘",
    "insertMath": "arrow.r.twohead.tail.dstruck",
    "insertCode": "sym.arrow.r.twohead.tail.dstruck"
  },
  {
    "name": "arrow.r.open",
    "base": "arrow",
    "modifiers": [
      "r",
      "open"
    ],
    "char": "⇾",
    "insertMath": "arrow.r.open",
    "insertCode": "sym.arrow.r.open"
  },
  {
    "name": "arrow.r.wave",
    "base": "arrow",
    "modifiers": [
      "r",
      "wave"
    ],
    "char": "↝",
    "insertMath": "arrow.r.wave",
    "insertCode": "sym.arrow.r.wave"
  },
  {
    "name": "arrow.l",
    "base": "arrow",
    "modifiers": [
      "l"
    ],
    "char": "←",
    "insertMath": "arrow.l",
    "insertCode": "sym.arrow.l"
  },
  {
    "name": "arrow.l.bar",
    "base": "arrow",
    "modifiers": [
      "l",
      "bar"
    ],
    "char": "↤",
    "insertMath": "arrow.l.bar",
    "insertCode": "sym.arrow.l.bar"
  },
  {
    "name": "arrow.l.curve",
    "base": "arrow",
    "modifiers": [
      "l",
      "curve"
    ],
    "char": "⤶",
    "insertMath": "arrow.l.curve",
    "insertCode": "sym.arrow.l.curve"
  },
  {
    "name": "arrow.l.turn",
    "base": "arrow",
    "modifiers": [
      "l",
      "turn"
    ],
    "char": "⮌",
    "insertMath": "arrow.l.turn",
    "insertCode": "sym.arrow.l.turn"
  },
  {
    "name": "arrow.l.dashed",
    "base": "arrow",
    "modifiers": [
      "l",
      "dashed"
    ],
    "char": "⇠",
    "insertMath": "arrow.l.dashed",
    "insertCode": "sym.arrow.l.dashed"
  },
  {
    "name": "arrow.l.dotted",
    "base": "arrow",
    "modifiers": [
      "l",
      "dotted"
    ],
    "char": "⬸",
    "insertMath": "arrow.l.dotted",
    "insertCode": "sym.arrow.l.dotted"
  },
  {
    "name": "arrow.l.double",
    "base": "arrow",
    "modifiers": [
      "l",
      "double"
    ],
    "char": "⇐",
    "insertMath": "arrow.l.double",
    "insertCode": "sym.arrow.l.double"
  },
  {
    "name": "arrow.l.double.bar",
    "base": "arrow",
    "modifiers": [
      "l",
      "double",
      "bar"
    ],
    "char": "⤆",
    "insertMath": "arrow.l.double.bar",
    "insertCode": "sym.arrow.l.double.bar"
  },
  {
    "name": "arrow.l.double.long",
    "base": "arrow",
    "modifiers": [
      "l",
      "double",
      "long"
    ],
    "char": "⟸",
    "insertMath": "arrow.l.double.long",
    "insertCode": "sym.arrow.l.double.long"
  },
  {
    "name": "arrow.l.double.long.bar",
    "base": "arrow",
    "modifiers": [
      "l",
      "double",
      "long",
      "bar"
    ],
    "char": "⟽",
    "insertMath": "arrow.l.double.long.bar",
    "insertCode": "sym.arrow.l.double.long.bar"
  },
  {
    "name": "arrow.l.double.not",
    "base": "arrow",
    "modifiers": [
      "l",
      "double",
      "not"
    ],
    "char": "⇍",
    "insertMath": "arrow.l.double.not",
    "insertCode": "sym.arrow.l.double.not"
  },
  {
    "name": "arrow.l.double.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "double",
      "struck"
    ],
    "char": "⤂",
    "insertMath": "arrow.l.double.struck",
    "insertCode": "sym.arrow.l.double.struck"
  },
  {
    "name": "arrow.l.filled",
    "base": "arrow",
    "modifiers": [
      "l",
      "filled"
    ],
    "char": "⬅︎",
    "insertMath": "arrow.l.filled",
    "insertCode": "sym.arrow.l.filled"
  },
  {
    "name": "arrow.l.hook",
    "base": "arrow",
    "modifiers": [
      "l",
      "hook"
    ],
    "char": "↩︎",
    "insertMath": "arrow.l.hook",
    "insertCode": "sym.arrow.l.hook"
  },
  {
    "name": "arrow.l.long",
    "base": "arrow",
    "modifiers": [
      "l",
      "long"
    ],
    "char": "⟵",
    "insertMath": "arrow.l.long",
    "insertCode": "sym.arrow.l.long"
  },
  {
    "name": "arrow.l.long.bar",
    "base": "arrow",
    "modifiers": [
      "l",
      "long",
      "bar"
    ],
    "char": "⟻",
    "insertMath": "arrow.l.long.bar",
    "insertCode": "sym.arrow.l.long.bar"
  },
  {
    "name": "arrow.l.long.squiggly",
    "base": "arrow",
    "modifiers": [
      "l",
      "long",
      "squiggly"
    ],
    "char": "⬳",
    "insertMath": "arrow.l.long.squiggly",
    "insertCode": "sym.arrow.l.long.squiggly"
  },
  {
    "name": "arrow.l.loop",
    "base": "arrow",
    "modifiers": [
      "l",
      "loop"
    ],
    "char": "↫",
    "insertMath": "arrow.l.loop",
    "insertCode": "sym.arrow.l.loop"
  },
  {
    "name": "arrow.l.not",
    "base": "arrow",
    "modifiers": [
      "l",
      "not"
    ],
    "char": "↚",
    "insertMath": "arrow.l.not",
    "insertCode": "sym.arrow.l.not"
  },
  {
    "name": "arrow.l.quad",
    "base": "arrow",
    "modifiers": [
      "l",
      "quad"
    ],
    "char": "⭅",
    "insertMath": "arrow.l.quad",
    "insertCode": "sym.arrow.l.quad"
  },
  {
    "name": "arrow.l.squiggly",
    "base": "arrow",
    "modifiers": [
      "l",
      "squiggly"
    ],
    "char": "⇜",
    "insertMath": "arrow.l.squiggly",
    "insertCode": "sym.arrow.l.squiggly"
  },
  {
    "name": "arrow.l.stop",
    "base": "arrow",
    "modifiers": [
      "l",
      "stop"
    ],
    "char": "⇤",
    "insertMath": "arrow.l.stop",
    "insertCode": "sym.arrow.l.stop"
  },
  {
    "name": "arrow.l.stroked",
    "base": "arrow",
    "modifiers": [
      "l",
      "stroked"
    ],
    "char": "⇦",
    "insertMath": "arrow.l.stroked",
    "insertCode": "sym.arrow.l.stroked"
  },
  {
    "name": "arrow.l.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "struck"
    ],
    "char": "⇷",
    "insertMath": "arrow.l.struck",
    "insertCode": "sym.arrow.l.struck"
  },
  {
    "name": "arrow.l.dstruck",
    "base": "arrow",
    "modifiers": [
      "l",
      "dstruck"
    ],
    "char": "⇺",
    "insertMath": "arrow.l.dstruck",
    "insertCode": "sym.arrow.l.dstruck"
  },
  {
    "name": "arrow.l.tail",
    "base": "arrow",
    "modifiers": [
      "l",
      "tail"
    ],
    "char": "↢",
    "insertMath": "arrow.l.tail",
    "insertCode": "sym.arrow.l.tail"
  },
  {
    "name": "arrow.l.tail.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "tail",
      "struck"
    ],
    "char": "⬹",
    "insertMath": "arrow.l.tail.struck",
    "insertCode": "sym.arrow.l.tail.struck"
  },
  {
    "name": "arrow.l.tail.dstruck",
    "base": "arrow",
    "modifiers": [
      "l",
      "tail",
      "dstruck"
    ],
    "char": "⬺",
    "insertMath": "arrow.l.tail.dstruck",
    "insertCode": "sym.arrow.l.tail.dstruck"
  },
  {
    "name": "arrow.l.tilde",
    "base": "arrow",
    "modifiers": [
      "l",
      "tilde"
    ],
    "char": "⭉",
    "insertMath": "arrow.l.tilde",
    "insertCode": "sym.arrow.l.tilde"
  },
  {
    "name": "arrow.l.triple",
    "base": "arrow",
    "modifiers": [
      "l",
      "triple"
    ],
    "char": "⇚",
    "insertMath": "arrow.l.triple",
    "insertCode": "sym.arrow.l.triple"
  },
  {
    "name": "arrow.l.twohead",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead"
    ],
    "char": "↞",
    "insertMath": "arrow.l.twohead",
    "insertCode": "sym.arrow.l.twohead"
  },
  {
    "name": "arrow.l.twohead.bar",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "bar"
    ],
    "char": "⬶",
    "insertMath": "arrow.l.twohead.bar",
    "insertCode": "sym.arrow.l.twohead.bar"
  },
  {
    "name": "arrow.l.twohead.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "struck"
    ],
    "char": "⬴",
    "insertMath": "arrow.l.twohead.struck",
    "insertCode": "sym.arrow.l.twohead.struck"
  },
  {
    "name": "arrow.l.twohead.dstruck",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "dstruck"
    ],
    "char": "⬵",
    "insertMath": "arrow.l.twohead.dstruck",
    "insertCode": "sym.arrow.l.twohead.dstruck"
  },
  {
    "name": "arrow.l.twohead.tail",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "tail"
    ],
    "char": "⬻",
    "insertMath": "arrow.l.twohead.tail",
    "insertCode": "sym.arrow.l.twohead.tail"
  },
  {
    "name": "arrow.l.twohead.tail.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "tail",
      "struck"
    ],
    "char": "⬼",
    "insertMath": "arrow.l.twohead.tail.struck",
    "insertCode": "sym.arrow.l.twohead.tail.struck"
  },
  {
    "name": "arrow.l.twohead.tail.dstruck",
    "base": "arrow",
    "modifiers": [
      "l",
      "twohead",
      "tail",
      "dstruck"
    ],
    "char": "⬽",
    "insertMath": "arrow.l.twohead.tail.dstruck",
    "insertCode": "sym.arrow.l.twohead.tail.dstruck"
  },
  {
    "name": "arrow.l.open",
    "base": "arrow",
    "modifiers": [
      "l",
      "open"
    ],
    "char": "⇽",
    "insertMath": "arrow.l.open",
    "insertCode": "sym.arrow.l.open"
  },
  {
    "name": "arrow.l.wave",
    "base": "arrow",
    "modifiers": [
      "l",
      "wave"
    ],
    "char": "↜",
    "insertMath": "arrow.l.wave",
    "insertCode": "sym.arrow.l.wave"
  },
  {
    "name": "arrow.t",
    "base": "arrow",
    "modifiers": [
      "t"
    ],
    "char": "↑",
    "insertMath": "arrow.t",
    "insertCode": "sym.arrow.t"
  },
  {
    "name": "arrow.t.bar",
    "base": "arrow",
    "modifiers": [
      "t",
      "bar"
    ],
    "char": "↥",
    "insertMath": "arrow.t.bar",
    "insertCode": "sym.arrow.t.bar"
  },
  {
    "name": "arrow.t.curve",
    "base": "arrow",
    "modifiers": [
      "t",
      "curve"
    ],
    "char": "⤴︎",
    "insertMath": "arrow.t.curve",
    "insertCode": "sym.arrow.t.curve"
  },
  {
    "name": "arrow.t.turn",
    "base": "arrow",
    "modifiers": [
      "t",
      "turn"
    ],
    "char": "⮍",
    "insertMath": "arrow.t.turn",
    "insertCode": "sym.arrow.t.turn"
  },
  {
    "name": "arrow.t.dashed",
    "base": "arrow",
    "modifiers": [
      "t",
      "dashed"
    ],
    "char": "⇡",
    "insertMath": "arrow.t.dashed",
    "insertCode": "sym.arrow.t.dashed"
  },
  {
    "name": "arrow.t.double",
    "base": "arrow",
    "modifiers": [
      "t",
      "double"
    ],
    "char": "⇑",
    "insertMath": "arrow.t.double",
    "insertCode": "sym.arrow.t.double"
  },
  {
    "name": "arrow.t.filled",
    "base": "arrow",
    "modifiers": [
      "t",
      "filled"
    ],
    "char": "⬆︎",
    "insertMath": "arrow.t.filled",
    "insertCode": "sym.arrow.t.filled"
  },
  {
    "name": "arrow.t.quad",
    "base": "arrow",
    "modifiers": [
      "t",
      "quad"
    ],
    "char": "⟰",
    "insertMath": "arrow.t.quad",
    "insertCode": "sym.arrow.t.quad"
  },
  {
    "name": "arrow.t.stop",
    "base": "arrow",
    "modifiers": [
      "t",
      "stop"
    ],
    "char": "⤒",
    "insertMath": "arrow.t.stop",
    "insertCode": "sym.arrow.t.stop"
  },
  {
    "name": "arrow.t.stroked",
    "base": "arrow",
    "modifiers": [
      "t",
      "stroked"
    ],
    "char": "⇧",
    "insertMath": "arrow.t.stroked",
    "insertCode": "sym.arrow.t.stroked"
  },
  {
    "name": "arrow.t.struck",
    "base": "arrow",
    "modifiers": [
      "t",
      "struck"
    ],
    "char": "⤉",
    "insertMath": "arrow.t.struck",
    "insertCode": "sym.arrow.t.struck"
  },
  {
    "name": "arrow.t.dstruck",
    "base": "arrow",
    "modifiers": [
      "t",
      "dstruck"
    ],
    "char": "⇞",
    "insertMath": "arrow.t.dstruck",
    "insertCode": "sym.arrow.t.dstruck"
  },
  {
    "name": "arrow.t.triple",
    "base": "arrow",
    "modifiers": [
      "t",
      "triple"
    ],
    "char": "⤊",
    "insertMath": "arrow.t.triple",
    "insertCode": "sym.arrow.t.triple"
  },
  {
    "name": "arrow.t.twohead",
    "base": "arrow",
    "modifiers": [
      "t",
      "twohead"
    ],
    "char": "↟",
    "insertMath": "arrow.t.twohead",
    "insertCode": "sym.arrow.t.twohead"
  },
  {
    "name": "arrow.b",
    "base": "arrow",
    "modifiers": [
      "b"
    ],
    "char": "↓",
    "insertMath": "arrow.b",
    "insertCode": "sym.arrow.b"
  },
  {
    "name": "arrow.b.bar",
    "base": "arrow",
    "modifiers": [
      "b",
      "bar"
    ],
    "char": "↧",
    "insertMath": "arrow.b.bar",
    "insertCode": "sym.arrow.b.bar"
  },
  {
    "name": "arrow.b.curve",
    "base": "arrow",
    "modifiers": [
      "b",
      "curve"
    ],
    "char": "⤵︎",
    "insertMath": "arrow.b.curve",
    "insertCode": "sym.arrow.b.curve"
  },
  {
    "name": "arrow.b.turn",
    "base": "arrow",
    "modifiers": [
      "b",
      "turn"
    ],
    "char": "⮏",
    "insertMath": "arrow.b.turn",
    "insertCode": "sym.arrow.b.turn"
  },
  {
    "name": "arrow.b.dashed",
    "base": "arrow",
    "modifiers": [
      "b",
      "dashed"
    ],
    "char": "⇣",
    "insertMath": "arrow.b.dashed",
    "insertCode": "sym.arrow.b.dashed"
  },
  {
    "name": "arrow.b.double",
    "base": "arrow",
    "modifiers": [
      "b",
      "double"
    ],
    "char": "⇓",
    "insertMath": "arrow.b.double",
    "insertCode": "sym.arrow.b.double"
  },
  {
    "name": "arrow.b.filled",
    "base": "arrow",
    "modifiers": [
      "b",
      "filled"
    ],
    "char": "⬇︎",
    "insertMath": "arrow.b.filled",
    "insertCode": "sym.arrow.b.filled"
  },
  {
    "name": "arrow.b.quad",
    "base": "arrow",
    "modifiers": [
      "b",
      "quad"
    ],
    "char": "⟱",
    "insertMath": "arrow.b.quad",
    "insertCode": "sym.arrow.b.quad"
  },
  {
    "name": "arrow.b.stop",
    "base": "arrow",
    "modifiers": [
      "b",
      "stop"
    ],
    "char": "⤓",
    "insertMath": "arrow.b.stop",
    "insertCode": "sym.arrow.b.stop"
  },
  {
    "name": "arrow.b.stroked",
    "base": "arrow",
    "modifiers": [
      "b",
      "stroked"
    ],
    "char": "⇩",
    "insertMath": "arrow.b.stroked",
    "insertCode": "sym.arrow.b.stroked"
  },
  {
    "name": "arrow.b.struck",
    "base": "arrow",
    "modifiers": [
      "b",
      "struck"
    ],
    "char": "⤈",
    "insertMath": "arrow.b.struck",
    "insertCode": "sym.arrow.b.struck"
  },
  {
    "name": "arrow.b.dstruck",
    "base": "arrow",
    "modifiers": [
      "b",
      "dstruck"
    ],
    "char": "⇟",
    "insertMath": "arrow.b.dstruck",
    "insertCode": "sym.arrow.b.dstruck"
  },
  {
    "name": "arrow.b.triple",
    "base": "arrow",
    "modifiers": [
      "b",
      "triple"
    ],
    "char": "⤋",
    "insertMath": "arrow.b.triple",
    "insertCode": "sym.arrow.b.triple"
  },
  {
    "name": "arrow.b.twohead",
    "base": "arrow",
    "modifiers": [
      "b",
      "twohead"
    ],
    "char": "↡",
    "insertMath": "arrow.b.twohead",
    "insertCode": "sym.arrow.b.twohead"
  },
  {
    "name": "arrow.l.r",
    "base": "arrow",
    "modifiers": [
      "l",
      "r"
    ],
    "char": "↔︎",
    "insertMath": "arrow.l.r",
    "insertCode": "sym.arrow.l.r"
  },
  {
    "name": "arrow.l.r.double",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "double"
    ],
    "char": "⇔",
    "insertMath": "arrow.l.r.double",
    "insertCode": "sym.arrow.l.r.double"
  },
  {
    "name": "arrow.l.r.double.long",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "double",
      "long"
    ],
    "char": "⟺",
    "insertMath": "arrow.l.r.double.long",
    "insertCode": "sym.arrow.l.r.double.long"
  },
  {
    "name": "arrow.l.r.double.not",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "double",
      "not"
    ],
    "char": "⇎",
    "insertMath": "arrow.l.r.double.not",
    "insertCode": "sym.arrow.l.r.double.not"
  },
  {
    "name": "arrow.l.r.double.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "double",
      "struck"
    ],
    "char": "⤄",
    "insertMath": "arrow.l.r.double.struck",
    "insertCode": "sym.arrow.l.r.double.struck"
  },
  {
    "name": "arrow.l.r.filled",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "filled"
    ],
    "char": "⬌",
    "insertMath": "arrow.l.r.filled",
    "insertCode": "sym.arrow.l.r.filled"
  },
  {
    "name": "arrow.l.r.long",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "long"
    ],
    "char": "⟷",
    "insertMath": "arrow.l.r.long",
    "insertCode": "sym.arrow.l.r.long"
  },
  {
    "name": "arrow.l.r.not",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "not"
    ],
    "char": "↮",
    "insertMath": "arrow.l.r.not",
    "insertCode": "sym.arrow.l.r.not"
  },
  {
    "name": "arrow.l.r.stroked",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "stroked"
    ],
    "char": "⬄",
    "insertMath": "arrow.l.r.stroked",
    "insertCode": "sym.arrow.l.r.stroked"
  },
  {
    "name": "arrow.l.r.struck",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "struck"
    ],
    "char": "⇹",
    "insertMath": "arrow.l.r.struck",
    "insertCode": "sym.arrow.l.r.struck"
  },
  {
    "name": "arrow.l.r.dstruck",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "dstruck"
    ],
    "char": "⇼",
    "insertMath": "arrow.l.r.dstruck",
    "insertCode": "sym.arrow.l.r.dstruck"
  },
  {
    "name": "arrow.l.r.open",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "open"
    ],
    "char": "⇿",
    "insertMath": "arrow.l.r.open",
    "insertCode": "sym.arrow.l.r.open"
  },
  {
    "name": "arrow.l.r.wave",
    "base": "arrow",
    "modifiers": [
      "l",
      "r",
      "wave"
    ],
    "char": "↭",
    "insertMath": "arrow.l.r.wave",
    "insertCode": "sym.arrow.l.r.wave"
  },
  {
    "name": "arrow.t.b",
    "base": "arrow",
    "modifiers": [
      "t",
      "b"
    ],
    "char": "↕︎",
    "insertMath": "arrow.t.b",
    "insertCode": "sym.arrow.t.b"
  },
  {
    "name": "arrow.t.b.double",
    "base": "arrow",
    "modifiers": [
      "t",
      "b",
      "double"
    ],
    "char": "⇕",
    "insertMath": "arrow.t.b.double",
    "insertCode": "sym.arrow.t.b.double"
  },
  {
    "name": "arrow.t.b.filled",
    "base": "arrow",
    "modifiers": [
      "t",
      "b",
      "filled"
    ],
    "char": "⬍",
    "insertMath": "arrow.t.b.filled",
    "insertCode": "sym.arrow.t.b.filled"
  },
  {
    "name": "arrow.t.b.stroked",
    "base": "arrow",
    "modifiers": [
      "t",
      "b",
      "stroked"
    ],
    "char": "⇳",
    "insertMath": "arrow.t.b.stroked",
    "insertCode": "sym.arrow.t.b.stroked"
  },
  {
    "name": "arrow.tr",
    "base": "arrow",
    "modifiers": [
      "tr"
    ],
    "char": "↗︎",
    "insertMath": "arrow.tr",
    "insertCode": "sym.arrow.tr"
  },
  {
    "name": "arrow.tr.double",
    "base": "arrow",
    "modifiers": [
      "tr",
      "double"
    ],
    "char": "⇗",
    "insertMath": "arrow.tr.double",
    "insertCode": "sym.arrow.tr.double"
  },
  {
    "name": "arrow.tr.filled",
    "base": "arrow",
    "modifiers": [
      "tr",
      "filled"
    ],
    "char": "⬈",
    "insertMath": "arrow.tr.filled",
    "insertCode": "sym.arrow.tr.filled"
  },
  {
    "name": "arrow.tr.hook",
    "base": "arrow",
    "modifiers": [
      "tr",
      "hook"
    ],
    "char": "⤤",
    "insertMath": "arrow.tr.hook",
    "insertCode": "sym.arrow.tr.hook"
  },
  {
    "name": "arrow.tr.stroked",
    "base": "arrow",
    "modifiers": [
      "tr",
      "stroked"
    ],
    "char": "⬀",
    "insertMath": "arrow.tr.stroked",
    "insertCode": "sym.arrow.tr.stroked"
  },
  {
    "name": "arrow.br",
    "base": "arrow",
    "modifiers": [
      "br"
    ],
    "char": "↘︎",
    "insertMath": "arrow.br",
    "insertCode": "sym.arrow.br"
  },
  {
    "name": "arrow.br.double",
    "base": "arrow",
    "modifiers": [
      "br",
      "double"
    ],
    "char": "⇘",
    "insertMath": "arrow.br.double",
    "insertCode": "sym.arrow.br.double"
  },
  {
    "name": "arrow.br.filled",
    "base": "arrow",
    "modifiers": [
      "br",
      "filled"
    ],
    "char": "⬊",
    "insertMath": "arrow.br.filled",
    "insertCode": "sym.arrow.br.filled"
  },
  {
    "name": "arrow.br.hook",
    "base": "arrow",
    "modifiers": [
      "br",
      "hook"
    ],
    "char": "⤥",
    "insertMath": "arrow.br.hook",
    "insertCode": "sym.arrow.br.hook"
  },
  {
    "name": "arrow.br.stroked",
    "base": "arrow",
    "modifiers": [
      "br",
      "stroked"
    ],
    "char": "⬂",
    "insertMath": "arrow.br.stroked",
    "insertCode": "sym.arrow.br.stroked"
  },
  {
    "name": "arrow.tl",
    "base": "arrow",
    "modifiers": [
      "tl"
    ],
    "char": "↖︎",
    "insertMath": "arrow.tl",
    "insertCode": "sym.arrow.tl"
  },
  {
    "name": "arrow.tl.double",
    "base": "arrow",
    "modifiers": [
      "tl",
      "double"
    ],
    "char": "⇖",
    "insertMath": "arrow.tl.double",
    "insertCode": "sym.arrow.tl.double"
  },
  {
    "name": "arrow.tl.filled",
    "base": "arrow",
    "modifiers": [
      "tl",
      "filled"
    ],
    "char": "⬉",
    "insertMath": "arrow.tl.filled",
    "insertCode": "sym.arrow.tl.filled"
  },
  {
    "name": "arrow.tl.hook",
    "base": "arrow",
    "modifiers": [
      "tl",
      "hook"
    ],
    "char": "⤣",
    "insertMath": "arrow.tl.hook",
    "insertCode": "sym.arrow.tl.hook"
  },
  {
    "name": "arrow.tl.stroked",
    "base": "arrow",
    "modifiers": [
      "tl",
      "stroked"
    ],
    "char": "⬁",
    "insertMath": "arrow.tl.stroked",
    "insertCode": "sym.arrow.tl.stroked"
  },
  {
    "name": "arrow.bl",
    "base": "arrow",
    "modifiers": [
      "bl"
    ],
    "char": "↙︎",
    "insertMath": "arrow.bl",
    "insertCode": "sym.arrow.bl"
  },
  {
    "name": "arrow.bl.double",
    "base": "arrow",
    "modifiers": [
      "bl",
      "double"
    ],
    "char": "⇙",
    "insertMath": "arrow.bl.double",
    "insertCode": "sym.arrow.bl.double"
  },
  {
    "name": "arrow.bl.filled",
    "base": "arrow",
    "modifiers": [
      "bl",
      "filled"
    ],
    "char": "⬋",
    "insertMath": "arrow.bl.filled",
    "insertCode": "sym.arrow.bl.filled"
  },
  {
    "name": "arrow.bl.hook",
    "base": "arrow",
    "modifiers": [
      "bl",
      "hook"
    ],
    "char": "⤦",
    "insertMath": "arrow.bl.hook",
    "insertCode": "sym.arrow.bl.hook"
  },
  {
    "name": "arrow.bl.stroked",
    "base": "arrow",
    "modifiers": [
      "bl",
      "stroked"
    ],
    "char": "⬃",
    "insertMath": "arrow.bl.stroked",
    "insertCode": "sym.arrow.bl.stroked"
  },
  {
    "name": "arrow.tl.br",
    "base": "arrow",
    "modifiers": [
      "tl",
      "br"
    ],
    "char": "⤡",
    "insertMath": "arrow.tl.br",
    "insertCode": "sym.arrow.tl.br"
  },
  {
    "name": "arrow.tr.bl",
    "base": "arrow",
    "modifiers": [
      "tr",
      "bl"
    ],
    "char": "⤢",
    "insertMath": "arrow.tr.bl",
    "insertCode": "sym.arrow.tr.bl"
  },
  {
    "name": "arrow.ccw",
    "base": "arrow",
    "modifiers": [
      "ccw"
    ],
    "char": "↺",
    "insertMath": "arrow.ccw",
    "insertCode": "sym.arrow.ccw"
  },
  {
    "name": "arrow.ccw.half",
    "base": "arrow",
    "modifiers": [
      "ccw",
      "half"
    ],
    "char": "↶",
    "insertMath": "arrow.ccw.half",
    "insertCode": "sym.arrow.ccw.half"
  },
  {
    "name": "arrow.cw",
    "base": "arrow",
    "modifiers": [
      "cw"
    ],
    "char": "↻",
    "insertMath": "arrow.cw",
    "insertCode": "sym.arrow.cw"
  },
  {
    "name": "arrow.cw.half",
    "base": "arrow",
    "modifiers": [
      "cw",
      "half"
    ],
    "char": "↷",
    "insertMath": "arrow.cw.half",
    "insertCode": "sym.arrow.cw.half"
  },
  {
    "name": "arrow.zigzag",
    "base": "arrow",
    "modifiers": [
      "zigzag"
    ],
    "char": "↯",
    "insertMath": "arrow.zigzag",
    "insertCode": "sym.arrow.zigzag"
  },
  {
    "name": "arrows.rr",
    "base": "arrows",
    "modifiers": [
      "rr"
    ],
    "char": "⇉",
    "insertMath": "arrows.rr",
    "insertCode": "sym.arrows.rr"
  },
  {
    "name": "arrows",
    "base": "arrows",
    "modifiers": [],
    "char": "⇉",
    "insertMath": "arrows",
    "insertCode": "sym.arrows"
  },
  {
    "name": "arrows.ll",
    "base": "arrows",
    "modifiers": [
      "ll"
    ],
    "char": "⇇",
    "insertMath": "arrows.ll",
    "insertCode": "sym.arrows.ll"
  },
  {
    "name": "arrows.tt",
    "base": "arrows",
    "modifiers": [
      "tt"
    ],
    "char": "⇈",
    "insertMath": "arrows.tt",
    "insertCode": "sym.arrows.tt"
  },
  {
    "name": "arrows.bb",
    "base": "arrows",
    "modifiers": [
      "bb"
    ],
    "char": "⇊",
    "insertMath": "arrows.bb",
    "insertCode": "sym.arrows.bb"
  },
  {
    "name": "arrows.lr",
    "base": "arrows",
    "modifiers": [
      "lr"
    ],
    "char": "⇆",
    "insertMath": "arrows.lr",
    "insertCode": "sym.arrows.lr"
  },
  {
    "name": "arrows.lr.stop",
    "base": "arrows",
    "modifiers": [
      "lr",
      "stop"
    ],
    "char": "↹",
    "insertMath": "arrows.lr.stop",
    "insertCode": "sym.arrows.lr.stop"
  },
  {
    "name": "arrows.rl",
    "base": "arrows",
    "modifiers": [
      "rl"
    ],
    "char": "⇄",
    "insertMath": "arrows.rl",
    "insertCode": "sym.arrows.rl"
  },
  {
    "name": "arrows.tb",
    "base": "arrows",
    "modifiers": [
      "tb"
    ],
    "char": "⇅",
    "insertMath": "arrows.tb",
    "insertCode": "sym.arrows.tb"
  },
  {
    "name": "arrows.bt",
    "base": "arrows",
    "modifiers": [
      "bt"
    ],
    "char": "⇵",
    "insertMath": "arrows.bt",
    "insertCode": "sym.arrows.bt"
  },
  {
    "name": "arrows.rrr",
    "base": "arrows",
    "modifiers": [
      "rrr"
    ],
    "char": "⇶",
    "insertMath": "arrows.rrr",
    "insertCode": "sym.arrows.rrr"
  },
  {
    "name": "arrows.lll",
    "base": "arrows",
    "modifiers": [
      "lll"
    ],
    "char": "⬱",
    "insertMath": "arrows.lll",
    "insertCode": "sym.arrows.lll"
  },
  {
    "name": "arrowhead.t",
    "base": "arrowhead",
    "modifiers": [
      "t"
    ],
    "char": "⌃",
    "insertMath": "arrowhead.t",
    "insertCode": "sym.arrowhead.t"
  },
  {
    "name": "arrowhead",
    "base": "arrowhead",
    "modifiers": [],
    "char": "⌃",
    "insertMath": "arrowhead",
    "insertCode": "sym.arrowhead"
  },
  {
    "name": "arrowhead.b",
    "base": "arrowhead",
    "modifiers": [
      "b"
    ],
    "char": "⌄",
    "insertMath": "arrowhead.b",
    "insertCode": "sym.arrowhead.b"
  },
  {
    "name": "harpoon.rt",
    "base": "harpoon",
    "modifiers": [
      "rt"
    ],
    "char": "⇀",
    "insertMath": "harpoon.rt",
    "insertCode": "sym.harpoon.rt"
  },
  {
    "name": "harpoon",
    "base": "harpoon",
    "modifiers": [],
    "char": "⇀",
    "insertMath": "harpoon",
    "insertCode": "sym.harpoon"
  },
  {
    "name": "harpoon.rt.bar",
    "base": "harpoon",
    "modifiers": [
      "rt",
      "bar"
    ],
    "char": "⥛",
    "insertMath": "harpoon.rt.bar",
    "insertCode": "sym.harpoon.rt.bar"
  },
  {
    "name": "harpoon.rt.stop",
    "base": "harpoon",
    "modifiers": [
      "rt",
      "stop"
    ],
    "char": "⥓",
    "insertMath": "harpoon.rt.stop",
    "insertCode": "sym.harpoon.rt.stop"
  },
  {
    "name": "harpoon.rb",
    "base": "harpoon",
    "modifiers": [
      "rb"
    ],
    "char": "⇁",
    "insertMath": "harpoon.rb",
    "insertCode": "sym.harpoon.rb"
  },
  {
    "name": "harpoon.rb.bar",
    "base": "harpoon",
    "modifiers": [
      "rb",
      "bar"
    ],
    "char": "⥟",
    "insertMath": "harpoon.rb.bar",
    "insertCode": "sym.harpoon.rb.bar"
  },
  {
    "name": "harpoon.rb.stop",
    "base": "harpoon",
    "modifiers": [
      "rb",
      "stop"
    ],
    "char": "⥗",
    "insertMath": "harpoon.rb.stop",
    "insertCode": "sym.harpoon.rb.stop"
  },
  {
    "name": "harpoon.lt",
    "base": "harpoon",
    "modifiers": [
      "lt"
    ],
    "char": "↼",
    "insertMath": "harpoon.lt",
    "insertCode": "sym.harpoon.lt"
  },
  {
    "name": "harpoon.lt.bar",
    "base": "harpoon",
    "modifiers": [
      "lt",
      "bar"
    ],
    "char": "⥚",
    "insertMath": "harpoon.lt.bar",
    "insertCode": "sym.harpoon.lt.bar"
  },
  {
    "name": "harpoon.lt.stop",
    "base": "harpoon",
    "modifiers": [
      "lt",
      "stop"
    ],
    "char": "⥒",
    "insertMath": "harpoon.lt.stop",
    "insertCode": "sym.harpoon.lt.stop"
  },
  {
    "name": "harpoon.lb",
    "base": "harpoon",
    "modifiers": [
      "lb"
    ],
    "char": "↽",
    "insertMath": "harpoon.lb",
    "insertCode": "sym.harpoon.lb"
  },
  {
    "name": "harpoon.lb.bar",
    "base": "harpoon",
    "modifiers": [
      "lb",
      "bar"
    ],
    "char": "⥞",
    "insertMath": "harpoon.lb.bar",
    "insertCode": "sym.harpoon.lb.bar"
  },
  {
    "name": "harpoon.lb.stop",
    "base": "harpoon",
    "modifiers": [
      "lb",
      "stop"
    ],
    "char": "⥖",
    "insertMath": "harpoon.lb.stop",
    "insertCode": "sym.harpoon.lb.stop"
  },
  {
    "name": "harpoon.tl",
    "base": "harpoon",
    "modifiers": [
      "tl"
    ],
    "char": "↿",
    "insertMath": "harpoon.tl",
    "insertCode": "sym.harpoon.tl"
  },
  {
    "name": "harpoon.tl.bar",
    "base": "harpoon",
    "modifiers": [
      "tl",
      "bar"
    ],
    "char": "⥠",
    "insertMath": "harpoon.tl.bar",
    "insertCode": "sym.harpoon.tl.bar"
  },
  {
    "name": "harpoon.tl.stop",
    "base": "harpoon",
    "modifiers": [
      "tl",
      "stop"
    ],
    "char": "⥘",
    "insertMath": "harpoon.tl.stop",
    "insertCode": "sym.harpoon.tl.stop"
  },
  {
    "name": "harpoon.tr",
    "base": "harpoon",
    "modifiers": [
      "tr"
    ],
    "char": "↾",
    "insertMath": "harpoon.tr",
    "insertCode": "sym.harpoon.tr"
  },
  {
    "name": "harpoon.tr.bar",
    "base": "harpoon",
    "modifiers": [
      "tr",
      "bar"
    ],
    "char": "⥜",
    "insertMath": "harpoon.tr.bar",
    "insertCode": "sym.harpoon.tr.bar"
  },
  {
    "name": "harpoon.tr.stop",
    "base": "harpoon",
    "modifiers": [
      "tr",
      "stop"
    ],
    "char": "⥔",
    "insertMath": "harpoon.tr.stop",
    "insertCode": "sym.harpoon.tr.stop"
  },
  {
    "name": "harpoon.bl",
    "base": "harpoon",
    "modifiers": [
      "bl"
    ],
    "char": "⇃",
    "insertMath": "harpoon.bl",
    "insertCode": "sym.harpoon.bl"
  },
  {
    "name": "harpoon.bl.bar",
    "base": "harpoon",
    "modifiers": [
      "bl",
      "bar"
    ],
    "char": "⥡",
    "insertMath": "harpoon.bl.bar",
    "insertCode": "sym.harpoon.bl.bar"
  },
  {
    "name": "harpoon.bl.stop",
    "base": "harpoon",
    "modifiers": [
      "bl",
      "stop"
    ],
    "char": "⥙",
    "insertMath": "harpoon.bl.stop",
    "insertCode": "sym.harpoon.bl.stop"
  },
  {
    "name": "harpoon.br",
    "base": "harpoon",
    "modifiers": [
      "br"
    ],
    "char": "⇂",
    "insertMath": "harpoon.br",
    "insertCode": "sym.harpoon.br"
  },
  {
    "name": "harpoon.br.bar",
    "base": "harpoon",
    "modifiers": [
      "br",
      "bar"
    ],
    "char": "⥝",
    "insertMath": "harpoon.br.bar",
    "insertCode": "sym.harpoon.br.bar"
  },
  {
    "name": "harpoon.br.stop",
    "base": "harpoon",
    "modifiers": [
      "br",
      "stop"
    ],
    "char": "⥕",
    "insertMath": "harpoon.br.stop",
    "insertCode": "sym.harpoon.br.stop"
  },
  {
    "name": "harpoon.lt.rt",
    "base": "harpoon",
    "modifiers": [
      "lt",
      "rt"
    ],
    "char": "⥎",
    "insertMath": "harpoon.lt.rt",
    "insertCode": "sym.harpoon.lt.rt"
  },
  {
    "name": "harpoon.lb.rb",
    "base": "harpoon",
    "modifiers": [
      "lb",
      "rb"
    ],
    "char": "⥐",
    "insertMath": "harpoon.lb.rb",
    "insertCode": "sym.harpoon.lb.rb"
  },
  {
    "name": "harpoon.lb.rt",
    "base": "harpoon",
    "modifiers": [
      "lb",
      "rt"
    ],
    "char": "⥋",
    "insertMath": "harpoon.lb.rt",
    "insertCode": "sym.harpoon.lb.rt"
  },
  {
    "name": "harpoon.lt.rb",
    "base": "harpoon",
    "modifiers": [
      "lt",
      "rb"
    ],
    "char": "⥊",
    "insertMath": "harpoon.lt.rb",
    "insertCode": "sym.harpoon.lt.rb"
  },
  {
    "name": "harpoon.tl.bl",
    "base": "harpoon",
    "modifiers": [
      "tl",
      "bl"
    ],
    "char": "⥑",
    "insertMath": "harpoon.tl.bl",
    "insertCode": "sym.harpoon.tl.bl"
  },
  {
    "name": "harpoon.tr.br",
    "base": "harpoon",
    "modifiers": [
      "tr",
      "br"
    ],
    "char": "⥏",
    "insertMath": "harpoon.tr.br",
    "insertCode": "sym.harpoon.tr.br"
  },
  {
    "name": "harpoon.tl.br",
    "base": "harpoon",
    "modifiers": [
      "tl",
      "br"
    ],
    "char": "⥍",
    "insertMath": "harpoon.tl.br",
    "insertCode": "sym.harpoon.tl.br"
  },
  {
    "name": "harpoon.tr.bl",
    "base": "harpoon",
    "modifiers": [
      "tr",
      "bl"
    ],
    "char": "⥌",
    "insertMath": "harpoon.tr.bl",
    "insertCode": "sym.harpoon.tr.bl"
  },
  {
    "name": "harpoons.rtrb",
    "base": "harpoons",
    "modifiers": [
      "rtrb"
    ],
    "char": "⥤",
    "insertMath": "harpoons.rtrb",
    "insertCode": "sym.harpoons.rtrb"
  },
  {
    "name": "harpoons",
    "base": "harpoons",
    "modifiers": [],
    "char": "⥤",
    "insertMath": "harpoons",
    "insertCode": "sym.harpoons"
  },
  {
    "name": "harpoons.blbr",
    "base": "harpoons",
    "modifiers": [
      "blbr"
    ],
    "char": "⥥",
    "insertMath": "harpoons.blbr",
    "insertCode": "sym.harpoons.blbr"
  },
  {
    "name": "harpoons.bltr",
    "base": "harpoons",
    "modifiers": [
      "bltr"
    ],
    "char": "⥯",
    "insertMath": "harpoons.bltr",
    "insertCode": "sym.harpoons.bltr"
  },
  {
    "name": "harpoons.lbrb",
    "base": "harpoons",
    "modifiers": [
      "lbrb"
    ],
    "char": "⥧",
    "insertMath": "harpoons.lbrb",
    "insertCode": "sym.harpoons.lbrb"
  },
  {
    "name": "harpoons.ltlb",
    "base": "harpoons",
    "modifiers": [
      "ltlb"
    ],
    "char": "⥢",
    "insertMath": "harpoons.ltlb",
    "insertCode": "sym.harpoons.ltlb"
  },
  {
    "name": "harpoons.ltrb",
    "base": "harpoons",
    "modifiers": [
      "ltrb"
    ],
    "char": "⇋",
    "insertMath": "harpoons.ltrb",
    "insertCode": "sym.harpoons.ltrb"
  },
  {
    "name": "harpoons.ltrt",
    "base": "harpoons",
    "modifiers": [
      "ltrt"
    ],
    "char": "⥦",
    "insertMath": "harpoons.ltrt",
    "insertCode": "sym.harpoons.ltrt"
  },
  {
    "name": "harpoons.rblb",
    "base": "harpoons",
    "modifiers": [
      "rblb"
    ],
    "char": "⥩",
    "insertMath": "harpoons.rblb",
    "insertCode": "sym.harpoons.rblb"
  },
  {
    "name": "harpoons.rtlb",
    "base": "harpoons",
    "modifiers": [
      "rtlb"
    ],
    "char": "⇌",
    "insertMath": "harpoons.rtlb",
    "insertCode": "sym.harpoons.rtlb"
  },
  {
    "name": "harpoons.rtlt",
    "base": "harpoons",
    "modifiers": [
      "rtlt"
    ],
    "char": "⥨",
    "insertMath": "harpoons.rtlt",
    "insertCode": "sym.harpoons.rtlt"
  },
  {
    "name": "harpoons.tlbr",
    "base": "harpoons",
    "modifiers": [
      "tlbr"
    ],
    "char": "⥮",
    "insertMath": "harpoons.tlbr",
    "insertCode": "sym.harpoons.tlbr"
  },
  {
    "name": "harpoons.tltr",
    "base": "harpoons",
    "modifiers": [
      "tltr"
    ],
    "char": "⥣",
    "insertMath": "harpoons.tltr",
    "insertCode": "sym.harpoons.tltr"
  },
  {
    "name": "tack.r",
    "base": "tack",
    "modifiers": [
      "r"
    ],
    "char": "⊢",
    "insertMath": "tack.r",
    "insertCode": "sym.tack.r"
  },
  {
    "name": "tack",
    "base": "tack",
    "modifiers": [],
    "char": "⊢",
    "insertMath": "tack",
    "insertCode": "sym.tack"
  },
  {
    "name": "tack.r.not",
    "base": "tack",
    "modifiers": [
      "r",
      "not"
    ],
    "char": "⊬",
    "insertMath": "tack.r.not",
    "insertCode": "sym.tack.r.not"
  },
  {
    "name": "tack.r.long",
    "base": "tack",
    "modifiers": [
      "r",
      "long"
    ],
    "char": "⟝",
    "insertMath": "tack.r.long",
    "insertCode": "sym.tack.r.long"
  },
  {
    "name": "tack.r.short",
    "base": "tack",
    "modifiers": [
      "r",
      "short"
    ],
    "char": "⊦",
    "insertMath": "tack.r.short",
    "insertCode": "sym.tack.r.short"
  },
  {
    "name": "tack.r.double",
    "base": "tack",
    "modifiers": [
      "r",
      "double"
    ],
    "char": "⊨",
    "insertMath": "tack.r.double",
    "insertCode": "sym.tack.r.double"
  },
  {
    "name": "tack.r.double.not",
    "base": "tack",
    "modifiers": [
      "r",
      "double",
      "not"
    ],
    "char": "⊭",
    "insertMath": "tack.r.double.not",
    "insertCode": "sym.tack.r.double.not"
  },
  {
    "name": "tack.l",
    "base": "tack",
    "modifiers": [
      "l"
    ],
    "char": "⊣",
    "insertMath": "tack.l",
    "insertCode": "sym.tack.l"
  },
  {
    "name": "tack.l.long",
    "base": "tack",
    "modifiers": [
      "l",
      "long"
    ],
    "char": "⟞",
    "insertMath": "tack.l.long",
    "insertCode": "sym.tack.l.long"
  },
  {
    "name": "tack.l.short",
    "base": "tack",
    "modifiers": [
      "l",
      "short"
    ],
    "char": "⫞",
    "insertMath": "tack.l.short",
    "insertCode": "sym.tack.l.short"
  },
  {
    "name": "tack.l.double",
    "base": "tack",
    "modifiers": [
      "l",
      "double"
    ],
    "char": "⫤",
    "insertMath": "tack.l.double",
    "insertCode": "sym.tack.l.double"
  },
  {
    "name": "tack.t",
    "base": "tack",
    "modifiers": [
      "t"
    ],
    "char": "⊥",
    "insertMath": "tack.t",
    "insertCode": "sym.tack.t"
  },
  {
    "name": "tack.t.big",
    "base": "tack",
    "modifiers": [
      "t",
      "big"
    ],
    "char": "⟘",
    "insertMath": "tack.t.big",
    "insertCode": "sym.tack.t.big"
  },
  {
    "name": "tack.t.double",
    "base": "tack",
    "modifiers": [
      "t",
      "double"
    ],
    "char": "⫫",
    "insertMath": "tack.t.double",
    "insertCode": "sym.tack.t.double"
  },
  {
    "name": "tack.t.short",
    "base": "tack",
    "modifiers": [
      "t",
      "short"
    ],
    "char": "⫠",
    "insertMath": "tack.t.short",
    "insertCode": "sym.tack.t.short"
  },
  {
    "name": "tack.b",
    "base": "tack",
    "modifiers": [
      "b"
    ],
    "char": "⊤",
    "insertMath": "tack.b",
    "insertCode": "sym.tack.b"
  },
  {
    "name": "tack.b.big",
    "base": "tack",
    "modifiers": [
      "b",
      "big"
    ],
    "char": "⟙",
    "insertMath": "tack.b.big",
    "insertCode": "sym.tack.b.big"
  },
  {
    "name": "tack.b.double",
    "base": "tack",
    "modifiers": [
      "b",
      "double"
    ],
    "char": "⫪",
    "insertMath": "tack.b.double",
    "insertCode": "sym.tack.b.double"
  },
  {
    "name": "tack.b.short",
    "base": "tack",
    "modifiers": [
      "b",
      "short"
    ],
    "char": "⫟",
    "insertMath": "tack.b.short",
    "insertCode": "sym.tack.b.short"
  },
  {
    "name": "tack.l.r",
    "base": "tack",
    "modifiers": [
      "l",
      "r"
    ],
    "char": "⟛",
    "insertMath": "tack.l.r",
    "insertCode": "sym.tack.l.r"
  },
  {
    "name": "alpha",
    "base": "alpha",
    "modifiers": [],
    "char": "α",
    "insertMath": "alpha",
    "insertCode": "sym.alpha"
  },
  {
    "name": "beta",
    "base": "beta",
    "modifiers": [],
    "char": "β",
    "insertMath": "beta",
    "insertCode": "sym.beta"
  },
  {
    "name": "beta.alt",
    "base": "beta",
    "modifiers": [
      "alt"
    ],
    "char": "ϐ",
    "insertMath": "beta.alt",
    "insertCode": "sym.beta.alt"
  },
  {
    "name": "chi",
    "base": "chi",
    "modifiers": [],
    "char": "χ",
    "insertMath": "chi",
    "insertCode": "sym.chi"
  },
  {
    "name": "delta",
    "base": "delta",
    "modifiers": [],
    "char": "δ",
    "insertMath": "delta",
    "insertCode": "sym.delta"
  },
  {
    "name": "digamma",
    "base": "digamma",
    "modifiers": [],
    "char": "ϝ",
    "insertMath": "digamma",
    "insertCode": "sym.digamma"
  },
  {
    "name": "epsilon",
    "base": "epsilon",
    "modifiers": [],
    "char": "ε",
    "insertMath": "epsilon",
    "insertCode": "sym.epsilon"
  },
  {
    "name": "epsilon.alt",
    "base": "epsilon",
    "modifiers": [
      "alt"
    ],
    "char": "ϵ",
    "insertMath": "epsilon.alt",
    "insertCode": "sym.epsilon.alt"
  },
  {
    "name": "epsilon.alt.rev",
    "base": "epsilon",
    "modifiers": [
      "alt",
      "rev"
    ],
    "char": "϶",
    "insertMath": "epsilon.alt.rev",
    "insertCode": "sym.epsilon.alt.rev"
  },
  {
    "name": "eta",
    "base": "eta",
    "modifiers": [],
    "char": "η",
    "insertMath": "eta",
    "insertCode": "sym.eta"
  },
  {
    "name": "gamma",
    "base": "gamma",
    "modifiers": [],
    "char": "γ",
    "insertMath": "gamma",
    "insertCode": "sym.gamma"
  },
  {
    "name": "iota",
    "base": "iota",
    "modifiers": [],
    "char": "ι",
    "insertMath": "iota",
    "insertCode": "sym.iota"
  },
  {
    "name": "iota.inv",
    "base": "iota",
    "modifiers": [
      "inv"
    ],
    "char": "℩",
    "insertMath": "iota.inv",
    "insertCode": "sym.iota.inv"
  },
  {
    "name": "kappa",
    "base": "kappa",
    "modifiers": [],
    "char": "κ",
    "insertMath": "kappa",
    "insertCode": "sym.kappa"
  },
  {
    "name": "kappa.alt",
    "base": "kappa",
    "modifiers": [
      "alt"
    ],
    "char": "ϰ",
    "insertMath": "kappa.alt",
    "insertCode": "sym.kappa.alt"
  },
  {
    "name": "lambda",
    "base": "lambda",
    "modifiers": [],
    "char": "λ",
    "insertMath": "lambda",
    "insertCode": "sym.lambda"
  },
  {
    "name": "mu",
    "base": "mu",
    "modifiers": [],
    "char": "μ",
    "insertMath": "mu",
    "insertCode": "sym.mu"
  },
  {
    "name": "nu",
    "base": "nu",
    "modifiers": [],
    "char": "ν",
    "insertMath": "nu",
    "insertCode": "sym.nu"
  },
  {
    "name": "omega",
    "base": "omega",
    "modifiers": [],
    "char": "ω",
    "insertMath": "omega",
    "insertCode": "sym.omega"
  },
  {
    "name": "omicron",
    "base": "omicron",
    "modifiers": [],
    "char": "ο",
    "insertMath": "omicron",
    "insertCode": "sym.omicron"
  },
  {
    "name": "phi",
    "base": "phi",
    "modifiers": [],
    "char": "φ",
    "insertMath": "phi",
    "insertCode": "sym.phi"
  },
  {
    "name": "phi.alt",
    "base": "phi",
    "modifiers": [
      "alt"
    ],
    "char": "ϕ",
    "insertMath": "phi.alt",
    "insertCode": "sym.phi.alt"
  },
  {
    "name": "pi",
    "base": "pi",
    "modifiers": [],
    "char": "π",
    "insertMath": "pi",
    "insertCode": "sym.pi"
  },
  {
    "name": "pi.alt",
    "base": "pi",
    "modifiers": [
      "alt"
    ],
    "char": "ϖ",
    "insertMath": "pi.alt",
    "insertCode": "sym.pi.alt"
  },
  {
    "name": "psi",
    "base": "psi",
    "modifiers": [],
    "char": "ψ",
    "insertMath": "psi",
    "insertCode": "sym.psi"
  },
  {
    "name": "rho",
    "base": "rho",
    "modifiers": [],
    "char": "ρ",
    "insertMath": "rho",
    "insertCode": "sym.rho"
  },
  {
    "name": "rho.alt",
    "base": "rho",
    "modifiers": [
      "alt"
    ],
    "char": "ϱ",
    "insertMath": "rho.alt",
    "insertCode": "sym.rho.alt"
  },
  {
    "name": "sigma",
    "base": "sigma",
    "modifiers": [],
    "char": "σ",
    "insertMath": "sigma",
    "insertCode": "sym.sigma"
  },
  {
    "name": "sigma.alt",
    "base": "sigma",
    "modifiers": [
      "alt"
    ],
    "char": "ς",
    "insertMath": "sigma.alt",
    "insertCode": "sym.sigma.alt"
  },
  {
    "name": "tau",
    "base": "tau",
    "modifiers": [],
    "char": "τ",
    "insertMath": "tau",
    "insertCode": "sym.tau"
  },
  {
    "name": "theta",
    "base": "theta",
    "modifiers": [],
    "char": "θ",
    "insertMath": "theta",
    "insertCode": "sym.theta"
  },
  {
    "name": "theta.alt",
    "base": "theta",
    "modifiers": [
      "alt"
    ],
    "char": "ϑ",
    "insertMath": "theta.alt",
    "insertCode": "sym.theta.alt"
  },
  {
    "name": "upsilon",
    "base": "upsilon",
    "modifiers": [],
    "char": "υ",
    "insertMath": "upsilon",
    "insertCode": "sym.upsilon"
  },
  {
    "name": "xi",
    "base": "xi",
    "modifiers": [],
    "char": "ξ",
    "insertMath": "xi",
    "insertCode": "sym.xi"
  },
  {
    "name": "zeta",
    "base": "zeta",
    "modifiers": [],
    "char": "ζ",
    "insertMath": "zeta",
    "insertCode": "sym.zeta"
  },
  {
    "name": "Alpha",
    "base": "Alpha",
    "modifiers": [],
    "char": "Α",
    "insertMath": "Alpha",
    "insertCode": "sym.Alpha"
  },
  {
    "name": "Beta",
    "base": "Beta",
    "modifiers": [],
    "char": "Β",
    "insertMath": "Beta",
    "insertCode": "sym.Beta"
  },
  {
    "name": "Chi",
    "base": "Chi",
    "modifiers": [],
    "char": "Χ",
    "insertMath": "Chi",
    "insertCode": "sym.Chi"
  },
  {
    "name": "Delta",
    "base": "Delta",
    "modifiers": [],
    "char": "Δ",
    "insertMath": "Delta",
    "insertCode": "sym.Delta"
  },
  {
    "name": "Digamma",
    "base": "Digamma",
    "modifiers": [],
    "char": "Ϝ",
    "insertMath": "Digamma",
    "insertCode": "sym.Digamma"
  },
  {
    "name": "Epsilon",
    "base": "Epsilon",
    "modifiers": [],
    "char": "Ε",
    "insertMath": "Epsilon",
    "insertCode": "sym.Epsilon"
  },
  {
    "name": "Eta",
    "base": "Eta",
    "modifiers": [],
    "char": "Η",
    "insertMath": "Eta",
    "insertCode": "sym.Eta"
  },
  {
    "name": "Gamma",
    "base": "Gamma",
    "modifiers": [],
    "char": "Γ",
    "insertMath": "Gamma",
    "insertCode": "sym.Gamma"
  },
  {
    "name": "Iota",
    "base": "Iota",
    "modifiers": [],
    "char": "Ι",
    "insertMath": "Iota",
    "insertCode": "sym.Iota"
  },
  {
    "name": "Kappa",
    "base": "Kappa",
    "modifiers": [],
    "char": "Κ",
    "insertMath": "Kappa",
    "insertCode": "sym.Kappa"
  },
  {
    "name": "Lambda",
    "base": "Lambda",
    "modifiers": [],
    "char": "Λ",
    "insertMath": "Lambda",
    "insertCode": "sym.Lambda"
  },
  {
    "name": "Mu",
    "base": "Mu",
    "modifiers": [],
    "char": "Μ",
    "insertMath": "Mu",
    "insertCode": "sym.Mu"
  },
  {
    "name": "Nu",
    "base": "Nu",
    "modifiers": [],
    "char": "Ν",
    "insertMath": "Nu",
    "insertCode": "sym.Nu"
  },
  {
    "name": "Omega",
    "base": "Omega",
    "modifiers": [],
    "char": "Ω",
    "insertMath": "Omega",
    "insertCode": "sym.Omega"
  },
  {
    "name": "Omega.inv",
    "base": "Omega",
    "modifiers": [
      "inv"
    ],
    "char": "℧",
    "insertMath": "Omega.inv",
    "insertCode": "sym.Omega.inv"
  },
  {
    "name": "Omicron",
    "base": "Omicron",
    "modifiers": [],
    "char": "Ο",
    "insertMath": "Omicron",
    "insertCode": "sym.Omicron"
  },
  {
    "name": "Phi",
    "base": "Phi",
    "modifiers": [],
    "char": "Φ",
    "insertMath": "Phi",
    "insertCode": "sym.Phi"
  },
  {
    "name": "Pi",
    "base": "Pi",
    "modifiers": [],
    "char": "Π",
    "insertMath": "Pi",
    "insertCode": "sym.Pi"
  },
  {
    "name": "Psi",
    "base": "Psi",
    "modifiers": [],
    "char": "Ψ",
    "insertMath": "Psi",
    "insertCode": "sym.Psi"
  },
  {
    "name": "Rho",
    "base": "Rho",
    "modifiers": [],
    "char": "Ρ",
    "insertMath": "Rho",
    "insertCode": "sym.Rho"
  },
  {
    "name": "Sigma",
    "base": "Sigma",
    "modifiers": [],
    "char": "Σ",
    "insertMath": "Sigma",
    "insertCode": "sym.Sigma"
  },
  {
    "name": "Tau",
    "base": "Tau",
    "modifiers": [],
    "char": "Τ",
    "insertMath": "Tau",
    "insertCode": "sym.Tau"
  },
  {
    "name": "Theta",
    "base": "Theta",
    "modifiers": [],
    "char": "Θ",
    "insertMath": "Theta",
    "insertCode": "sym.Theta"
  },
  {
    "name": "Theta.alt",
    "base": "Theta",
    "modifiers": [
      "alt"
    ],
    "char": "ϴ",
    "insertMath": "Theta.alt",
    "insertCode": "sym.Theta.alt"
  },
  {
    "name": "Upsilon",
    "base": "Upsilon",
    "modifiers": [],
    "char": "Υ",
    "insertMath": "Upsilon",
    "insertCode": "sym.Upsilon"
  },
  {
    "name": "Xi",
    "base": "Xi",
    "modifiers": [],
    "char": "Ξ",
    "insertMath": "Xi",
    "insertCode": "sym.Xi"
  },
  {
    "name": "Zeta",
    "base": "Zeta",
    "modifiers": [],
    "char": "Ζ",
    "insertMath": "Zeta",
    "insertCode": "sym.Zeta"
  },
  {
    "name": "sha",
    "base": "sha",
    "modifiers": [],
    "char": "ш",
    "insertMath": "sha",
    "insertCode": "sym.sha"
  },
  {
    "name": "Sha",
    "base": "Sha",
    "modifiers": [],
    "char": "Ш",
    "insertMath": "Sha",
    "insertCode": "sym.Sha"
  },
  {
    "name": "aleph",
    "base": "aleph",
    "modifiers": [],
    "char": "א",
    "insertMath": "aleph",
    "insertCode": "sym.aleph"
  },
  {
    "name": "beth",
    "base": "beth",
    "modifiers": [],
    "char": "ב",
    "insertMath": "beth",
    "insertCode": "sym.beth"
  },
  {
    "name": "gimel",
    "base": "gimel",
    "modifiers": [],
    "char": "ג",
    "insertMath": "gimel",
    "insertCode": "sym.gimel"
  },
  {
    "name": "daleth",
    "base": "daleth",
    "modifiers": [],
    "char": "ד",
    "insertMath": "daleth",
    "insertCode": "sym.daleth"
  },
  {
    "name": "AA",
    "base": "AA",
    "modifiers": [],
    "char": "𝔸",
    "insertMath": "AA",
    "insertCode": "sym.AA"
  },
  {
    "name": "BB",
    "base": "BB",
    "modifiers": [],
    "char": "𝔹",
    "insertMath": "BB",
    "insertCode": "sym.BB"
  },
  {
    "name": "CC",
    "base": "CC",
    "modifiers": [],
    "char": "ℂ",
    "insertMath": "CC",
    "insertCode": "sym.CC"
  },
  {
    "name": "DD",
    "base": "DD",
    "modifiers": [],
    "char": "𝔻",
    "insertMath": "DD",
    "insertCode": "sym.DD"
  },
  {
    "name": "EE",
    "base": "EE",
    "modifiers": [],
    "char": "𝔼",
    "insertMath": "EE",
    "insertCode": "sym.EE"
  },
  {
    "name": "FF",
    "base": "FF",
    "modifiers": [],
    "char": "𝔽",
    "insertMath": "FF",
    "insertCode": "sym.FF"
  },
  {
    "name": "GG",
    "base": "GG",
    "modifiers": [],
    "char": "𝔾",
    "insertMath": "GG",
    "insertCode": "sym.GG"
  },
  {
    "name": "HH",
    "base": "HH",
    "modifiers": [],
    "char": "ℍ",
    "insertMath": "HH",
    "insertCode": "sym.HH"
  },
  {
    "name": "II",
    "base": "II",
    "modifiers": [],
    "char": "𝕀",
    "insertMath": "II",
    "insertCode": "sym.II"
  },
  {
    "name": "JJ",
    "base": "JJ",
    "modifiers": [],
    "char": "𝕁",
    "insertMath": "JJ",
    "insertCode": "sym.JJ"
  },
  {
    "name": "KK",
    "base": "KK",
    "modifiers": [],
    "char": "𝕂",
    "insertMath": "KK",
    "insertCode": "sym.KK"
  },
  {
    "name": "LL",
    "base": "LL",
    "modifiers": [],
    "char": "𝕃",
    "insertMath": "LL",
    "insertCode": "sym.LL"
  },
  {
    "name": "MM",
    "base": "MM",
    "modifiers": [],
    "char": "𝕄",
    "insertMath": "MM",
    "insertCode": "sym.MM"
  },
  {
    "name": "NN",
    "base": "NN",
    "modifiers": [],
    "char": "ℕ",
    "insertMath": "NN",
    "insertCode": "sym.NN"
  },
  {
    "name": "OO",
    "base": "OO",
    "modifiers": [],
    "char": "𝕆",
    "insertMath": "OO",
    "insertCode": "sym.OO"
  },
  {
    "name": "PP",
    "base": "PP",
    "modifiers": [],
    "char": "ℙ",
    "insertMath": "PP",
    "insertCode": "sym.PP"
  },
  {
    "name": "QQ",
    "base": "QQ",
    "modifiers": [],
    "char": "ℚ",
    "insertMath": "QQ",
    "insertCode": "sym.QQ"
  },
  {
    "name": "RR",
    "base": "RR",
    "modifiers": [],
    "char": "ℝ",
    "insertMath": "RR",
    "insertCode": "sym.RR"
  },
  {
    "name": "SS",
    "base": "SS",
    "modifiers": [],
    "char": "𝕊",
    "insertMath": "SS",
    "insertCode": "sym.SS"
  },
  {
    "name": "TT",
    "base": "TT",
    "modifiers": [],
    "char": "𝕋",
    "insertMath": "TT",
    "insertCode": "sym.TT"
  },
  {
    "name": "UU",
    "base": "UU",
    "modifiers": [],
    "char": "𝕌",
    "insertMath": "UU",
    "insertCode": "sym.UU"
  },
  {
    "name": "VV",
    "base": "VV",
    "modifiers": [],
    "char": "𝕍",
    "insertMath": "VV",
    "insertCode": "sym.VV"
  },
  {
    "name": "WW",
    "base": "WW",
    "modifiers": [],
    "char": "𝕎",
    "insertMath": "WW",
    "insertCode": "sym.WW"
  },
  {
    "name": "XX",
    "base": "XX",
    "modifiers": [],
    "char": "𝕏",
    "insertMath": "XX",
    "insertCode": "sym.XX"
  },
  {
    "name": "YY",
    "base": "YY",
    "modifiers": [],
    "char": "𝕐",
    "insertMath": "YY",
    "insertCode": "sym.YY"
  },
  {
    "name": "ZZ",
    "base": "ZZ",
    "modifiers": [],
    "char": "ℤ",
    "insertMath": "ZZ",
    "insertCode": "sym.ZZ"
  },
  {
    "name": "angstrom",
    "base": "angstrom",
    "modifiers": [],
    "char": "Å",
    "insertMath": "angstrom",
    "insertCode": "sym.angstrom"
  },
  {
    "name": "ell",
    "base": "ell",
    "modifiers": [],
    "char": "ℓ",
    "insertMath": "ell",
    "insertCode": "sym.ell"
  },
  {
    "name": "pee",
    "base": "pee",
    "modifiers": [],
    "char": "℘",
    "insertMath": "pee",
    "insertCode": "sym.pee"
  },
  {
    "name": "planck",
    "base": "planck",
    "modifiers": [],
    "char": "ħ",
    "insertMath": "planck",
    "insertCode": "sym.planck"
  },
  {
    "name": "Re",
    "base": "Re",
    "modifiers": [],
    "char": "ℜ",
    "insertMath": "Re",
    "insertCode": "sym.Re"
  },
  {
    "name": "Im",
    "base": "Im",
    "modifiers": [],
    "char": "ℑ",
    "insertMath": "Im",
    "insertCode": "sym.Im"
  },
  {
    "name": "dotless.i",
    "base": "dotless",
    "modifiers": [
      "i"
    ],
    "char": "ı",
    "insertMath": "dotless.i",
    "insertCode": "sym.dotless.i"
  },
  {
    "name": "dotless",
    "base": "dotless",
    "modifiers": [],
    "char": "ı",
    "insertMath": "dotless",
    "insertCode": "sym.dotless"
  },
  {
    "name": "dotless.j",
    "base": "dotless",
    "modifiers": [
      "j"
    ],
    "char": "ȷ",
    "insertMath": "dotless.j",
    "insertCode": "sym.dotless.j"
  },
  {
    "name": "die.six",
    "base": "die",
    "modifiers": [
      "six"
    ],
    "char": "⚅",
    "insertMath": "die.six",
    "insertCode": "sym.die.six"
  },
  {
    "name": "die",
    "base": "die",
    "modifiers": [],
    "char": "⚅",
    "insertMath": "die",
    "insertCode": "sym.die"
  },
  {
    "name": "die.five",
    "base": "die",
    "modifiers": [
      "five"
    ],
    "char": "⚄",
    "insertMath": "die.five",
    "insertCode": "sym.die.five"
  },
  {
    "name": "die.four",
    "base": "die",
    "modifiers": [
      "four"
    ],
    "char": "⚃",
    "insertMath": "die.four",
    "insertCode": "sym.die.four"
  },
  {
    "name": "die.three",
    "base": "die",
    "modifiers": [
      "three"
    ],
    "char": "⚂",
    "insertMath": "die.three",
    "insertCode": "sym.die.three"
  },
  {
    "name": "die.two",
    "base": "die",
    "modifiers": [
      "two"
    ],
    "char": "⚁",
    "insertMath": "die.two",
    "insertCode": "sym.die.two"
  },
  {
    "name": "die.one",
    "base": "die",
    "modifiers": [
      "one"
    ],
    "char": "⚀",
    "insertMath": "die.one",
    "insertCode": "sym.die.one"
  },
  {
    "name": "errorbar.square.stroked",
    "base": "errorbar",
    "modifiers": [
      "square",
      "stroked"
    ],
    "char": "⧮",
    "insertMath": "errorbar.square.stroked",
    "insertCode": "sym.errorbar.square.stroked"
  },
  {
    "name": "errorbar",
    "base": "errorbar",
    "modifiers": [],
    "char": "⧮",
    "insertMath": "errorbar",
    "insertCode": "sym.errorbar"
  },
  {
    "name": "errorbar.square.filled",
    "base": "errorbar",
    "modifiers": [
      "square",
      "filled"
    ],
    "char": "⧯",
    "insertMath": "errorbar.square.filled",
    "insertCode": "sym.errorbar.square.filled"
  },
  {
    "name": "errorbar.diamond.stroked",
    "base": "errorbar",
    "modifiers": [
      "diamond",
      "stroked"
    ],
    "char": "⧰",
    "insertMath": "errorbar.diamond.stroked",
    "insertCode": "sym.errorbar.diamond.stroked"
  },
  {
    "name": "errorbar.diamond.filled",
    "base": "errorbar",
    "modifiers": [
      "diamond",
      "filled"
    ],
    "char": "⧱",
    "insertMath": "errorbar.diamond.filled",
    "insertCode": "sym.errorbar.diamond.filled"
  },
  {
    "name": "errorbar.circle.stroked",
    "base": "errorbar",
    "modifiers": [
      "circle",
      "stroked"
    ],
    "char": "⧲",
    "insertMath": "errorbar.circle.stroked",
    "insertCode": "sym.errorbar.circle.stroked"
  },
  {
    "name": "errorbar.circle.filled",
    "base": "errorbar",
    "modifiers": [
      "circle",
      "filled"
    ],
    "char": "⧳",
    "insertMath": "errorbar.circle.filled",
    "insertCode": "sym.errorbar.circle.filled"
  },
  {
    "name": "gender.female",
    "base": "gender.female",
    "modifiers": [],
    "char": "♀︎",
    "insertMath": "gender.female",
    "insertCode": "sym.gender.female"
  },
  {
    "name": "gender.female.double",
    "base": "gender.female",
    "modifiers": [
      "double"
    ],
    "char": "⚢",
    "insertMath": "gender.female.double",
    "insertCode": "sym.gender.female.double"
  },
  {
    "name": "gender.female.male",
    "base": "gender.female",
    "modifiers": [
      "male"
    ],
    "char": "⚤",
    "insertMath": "gender.female.male",
    "insertCode": "sym.gender.female.male"
  },
  {
    "name": "gender.intersex",
    "base": "gender.intersex",
    "modifiers": [],
    "char": "⚥",
    "insertMath": "gender.intersex",
    "insertCode": "sym.gender.intersex"
  },
  {
    "name": "gender.male",
    "base": "gender.male",
    "modifiers": [],
    "char": "♂︎",
    "insertMath": "gender.male",
    "insertCode": "sym.gender.male"
  },
  {
    "name": "gender.male.double",
    "base": "gender.male",
    "modifiers": [
      "double"
    ],
    "char": "⚣",
    "insertMath": "gender.male.double",
    "insertCode": "sym.gender.male.double"
  },
  {
    "name": "gender.male.female",
    "base": "gender.male",
    "modifiers": [
      "female"
    ],
    "char": "⚤",
    "insertMath": "gender.male.female",
    "insertCode": "sym.gender.male.female"
  },
  {
    "name": "gender.male.stroke",
    "base": "gender.male",
    "modifiers": [
      "stroke"
    ],
    "char": "⚦",
    "insertMath": "gender.male.stroke",
    "insertCode": "sym.gender.male.stroke"
  },
  {
    "name": "gender.male.stroke.t",
    "base": "gender.male",
    "modifiers": [
      "stroke",
      "t"
    ],
    "char": "⚨",
    "insertMath": "gender.male.stroke.t",
    "insertCode": "sym.gender.male.stroke.t"
  },
  {
    "name": "gender.male.stroke.r",
    "base": "gender.male",
    "modifiers": [
      "stroke",
      "r"
    ],
    "char": "⚩",
    "insertMath": "gender.male.stroke.r",
    "insertCode": "sym.gender.male.stroke.r"
  },
  {
    "name": "gender.neuter",
    "base": "gender.neuter",
    "modifiers": [],
    "char": "⚲",
    "insertMath": "gender.neuter",
    "insertCode": "sym.gender.neuter"
  },
  {
    "name": "gender.trans",
    "base": "gender.trans",
    "modifiers": [],
    "char": "⚧︎",
    "insertMath": "gender.trans",
    "insertCode": "sym.gender.trans"
  }
]

export const symbolByName: Record<string, TypstSymEntry> = Object.fromEntries(
  allSymbols.map((symbol) => [symbol.name, symbol]),
)

export const symbolNames = allSymbols.map((symbol) => symbol.name)

export const symbolBaseNames = [...new Set(allSymbols.map((symbol) => symbol.base))]
