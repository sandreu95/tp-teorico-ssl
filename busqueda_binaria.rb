require 'benchmark'
include Benchmark

def busqueda_binaria(n, arr)
  middle = arr.length.div(2)
  i = 0
  j = arr.length - 1

  while i <= j
    middle = (i + j).div(2)
    if arr[middle] == n
      return middle
    elsif arr[middle] > n
      j = middle - 1
    else
      i = middle + 1
      middle = i + j / 2
    end
  end
  false
end 

array = [1,2,3,4,5,6,7,8,9,10,15,17,20,21,22,23,27,25,26,27,28,29,30,31,32,33,34,35,36]

Benchmark.benchmark(CAPTION, 7, FORMAT, ">total:", ">avg:") do |x|  
  x.report("times:") { busqueda_binaria(1,array) }
end