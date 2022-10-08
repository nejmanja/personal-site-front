import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: fixCasing.py inputFile")
        exit(1)

    target = open(sys.argv[1], "r")
    lines = target.readlines()
    target.close()
    for i in range(0, len(lines)):
        #include tabbed out lines
        if lines[i].strip() != "" and lines[i].strip()[0] == '.':
            while True:
                ind = lines[i].find('-')
                # if not found or last char of string (wouldn't make sense)
                if ind == -1 or ind == len(lines[i]): 
                    break
                # double dash, replace with underscore
                if lines[i][ind + 1] == '-':
                    newStr = lines[i][0:ind] + '_' + lines[i][ind+2:]
                    lines[i] = newStr
                elif lines[i][ind + 1].isalpha():
                    newStr = lines[i][0:ind] + lines[i][ind+1].upper() + lines[i][ind+2:]
                    lines[i] = newStr
                # if dash then number, just remove the dash
                elif lines[i][ind + 1].isnumeric():
                    newStr = lines[i][0:ind] + lines[i][ind+1:]
                    lines[i] = newStr


    target = open(sys.argv[1], "w")
    target.writelines(lines)
    target.close()
            

if __name__ == "__main__":
    main()