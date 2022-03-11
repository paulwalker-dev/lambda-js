// Helpers
export const JSNum = n => n(x => x + 1)(0)
export const ToNum = n => {
  const aux = (x, n) => (n == 0 ? x : aux(Succ(x), n - 1))

  return aux(Zero, n)
}

// Primitives
export const I = x => x
export const M = f => f(f)
export const K = x => y => x
export const KI = x => y => y
export const C = f => x => y => f(y)(x)
export const B = f => g => x => f(g(x))

// Booleans
export const T = K
export const F = KI

// Boolean equalities
export const Not = p => p(F)(T)
export const And = p => q => p(q)(F)
export const Or = p => q => p(p)(q)
export const Beq = p => q => p(q)(Not(q))
export const Xor = p => q => p(Not(q))(q)

// Pairs
export const Pair = x => y => f => f(x)(y)
export const First = p => p(K)
export const Second = p => p(KI)

export const Nil = x => T
export const Null = p => p(x => y => F)

// Numbers
export const Succ = n => f => a => f(n(f)(a))
export const Next = p => Pair(Second(p))(Succ(Second(p)))

export const Decr = n => First(n(Next)(Pair(Zero)(Zero)))

export const Zero = f => x => x
export const One = Succ(Zero)

// Number equalities
export const IsZero = p => p(K(F))(T)
export const IsEven = p => p(Not)(T)
export const IsOdd = p => p(Not)(F)

// Arithetic
export const Add = n => m => n(Succ)(m)
export const Multiply = B
export const Power = n => m => m(n)

export const Subtract = n => m => m(Decr)(n)
