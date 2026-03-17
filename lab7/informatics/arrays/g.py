n = int(input())
a = list(map(int, input().split()))

# Самый простой способ через срез
print(*(a[::-1]))