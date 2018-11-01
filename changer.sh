#!/bin/bash

#el text a reemplaçar serà "diadelmes"

#for day in {1..31};
#do
#    sed '0,/`echo $day`/{s/Apple/Banana/}' filenameecho day $day
#done 

#day="Apple"
#echo $day
#sed '0,/`echo $day`/{s/Apple/Banana/}' examwer.txt
#sed '0,/Apple/{s/Apple/Banana/}' examwer.txt

awk '/Apple/ && !done { print "Apple \"newfile.h\""; done=1;}; 1;' file.c