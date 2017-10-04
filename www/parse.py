code = open("projlist.html", "r").readlines()
print(code[0])
codenew = open("projnew.html", "w")
for i in range(len(code)):
    if "<span class=\"hidden\">" in code[i]:
        classes = code[i][code[i].index('\"hidden\">') + len('\"hidden\">'):]
        j = i+1
        while j < len(code) and "<span class=\"hidden\">" not in code[j]:
            if "Class:" in code[j]:
                code[j]+=classes+"<br>"
            j+=1;
for i in code:
    codenew.write(i)

