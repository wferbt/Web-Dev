def power(a, n):
    res = 1
    for _ in range(int(n)):
        res *= a
    return res


a, n = map(float, input().split())
print(power(a, n))