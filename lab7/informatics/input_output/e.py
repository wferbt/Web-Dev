v = int(input())
t = int(input())

L = 109

dist = v * t

position = dist % L

print(position)