def mergeSort(array):
  if len(array) <= 1:
    return array
  middle = len(array) // 2
  return merge(
    mergeSort(array[:middle]),
    mergeSort(array[middle:])
    )

def merge(left, right):
  if not left:
    return right
  if not right:
    return left
  if left[0] < right[0]:
    return [left[0]] + merge(left[1:], right)
  return [right[0]] + merge(left, right[1:])

print(mergeSort([7, 6, 5, 4, 3, 2, 1]))