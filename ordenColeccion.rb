require 'benchmark'
include Benchmark

def ordenamiento_burbuja(array)
    array_length = array.size
    return array if array_length <= 1
  
    loop do
      intercambio = false
  
      (array_length-1).times do |i|
        if array[i] > array[i+1]
          array[i], array[i+1] = array[i+1], array[i]
          intercambio = true
        end
      end
  
      break if not intercambio
    end
  
    array
  end

unsorted_array = [11,5,7,6,15]

Benchmark.benchmark(CAPTION, 7, FORMAT, ">total:", ">avg:") do |x|  
  x.report("times:") { ordenamiento_burbuja(unsorted_array) }
end