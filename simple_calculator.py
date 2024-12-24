# Initialize an empty list to store the lines
lines = []

print("Enter lines of text (type 'END' on a new line to finish):")

# Infinite loop to accept multiple lines
while True:
    line = input()
    if line == "END":
        break
    lines.append(line.upper())

# Join the lines into a single string separated by newlines and print the result
result = "\n".join(lines)
print("\nConverted to uppercase:\n")
print(result)
