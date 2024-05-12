import json

# Read JSON data from an external file
with open('books.json', 'r') as file:
    data = json.load(file)

# Display details
print("Title of the first book:", data[0]['title'])
print("Author of the second book:", data[1]['author'])
genres = ', '.join([genre for book in data for genre in book['genres']])
print("Genres of all books:", genres)