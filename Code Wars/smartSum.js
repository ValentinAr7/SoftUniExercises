const smartSum = (...args) => args.reduce
((s, a) => s + (Number.isInteger(a) ? a : smartSum(...a)), 0);


smartSum(1,2,3,[4,5],6)