def two_sum(nums, target):
    seen = {}

    for i, num in enumerate(nums):
        result = target - num

        if result in seen:
            return [seen[result], i]

        seen[num] = i

    return []


print(two_sum([1, 2, 3, 5], 5))