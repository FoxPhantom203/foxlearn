// FoxLearn Lesson Content
// Content for all 43 lessons across 21 courses

// Copy code to clipboard (used in lesson content)
function copyCode(button) {
  const codeBlock = button.parentElement.querySelector('code');
  const code = codeBlock.textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
    showNotification('Code copied to clipboard!', 'success');
  }).catch(() => {
    showNotification('Failed to copy code', 'error');
  });
}

// Generate coding lesson content
function generateCodingLesson(courseId, lessonId) {
  const lessons = {
    'python-1': `
      <div class="lesson-block">
        <h3>Your First Python Program</h3>
        <p>Python is a programming language that's easy to read and write. Let's start with the basics.</p>
        <div class="code-block">
          <pre><code>print("Hello, World!")</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>This simple line prints "Hello, World!" to the screen.</p>
        <p><em>Try it:</em> Copy the code and paste it into a Python interpreter or online editor.</p>
      </div>
    `,
    'python-2': `
      <div class="lesson-block">
        <h3>Variables</h3>
        <p>Variables are like containers for storing data. You can give them names and change their values.</p>
        <div class="code-block">
          <pre><code>name = "Rogue"
age = 5
greeting = "Hello, " + name</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Here we create three variables: <code>name</code>, <code>age</code>, and <code>greeting</code>.</p>
      </div>
    `,
    'python-3': `
      <div class="lesson-block">
        <h3>Conditionals</h3>
        <p>Conditionals let your code make decisions based on whether something is true or false.</p>
        <div class="code-block">
          <pre><code>temperature = 25

if temperature > 20:
    print("It's warm outside!")
else:
    print("It's a bit chilly.")</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>The <code>if</code> statement checks if the temperature is greater than 20.</p>
      </div>
    `,
    'js-1': `
      <div class="lesson-block">
        <h3>Hello, JavaScript</h3>
        <p>JavaScript is the programming language of the web. It runs in your browser.</p>
        <div class="code-block">
          <pre><code>console.log("Hello, World!");</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Open your browser's developer tools (F12) and paste this into the console!</p>
      </div>
    `,
    'js-2': `
      <div class="lesson-block">
        <h3>DOM Basics</h3>
        <p>The DOM (Document Object Model) is how JavaScript interacts with web pages.</p>
        <div class="code-block">
          <pre><code>// Change the text of an element
document.getElementById("myButton").textContent = "Clicked!";

// Change the color
document.querySelector(".myClass").style.color = "blue";</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'html-1': `
      <div class="lesson-block">
        <h3>HTML Basics</h3>
        <p>HTML (HyperText Markup Language) is the structure of a web page.</p>
        <div class="code-block">
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Save as <code>index.html</code> and open it in your browser!</p>
      </div>
    `,
    'css-1': `
      <div class="lesson-block">
        <h3>CSS Basics</h3>
        <p>CSS (Cascading Style Sheets) adds style to your HTML.</p>
        <div class="code-block">
          <pre><code>h1 {
    color: blue;
    font-size: 24px;
}

p {
    color: gray;
    line-height: 1.5;
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Add this to a <code>&lt;style&gt;</code> tag in your HTML or a separate .css file.</p>
      </div>
    `,
    'ts-1': `
      <div class="lesson-block">
        <h3>Type Basics</h3>
        <p>TypeScript adds types to JavaScript to catch errors early.</p>
        <div class="code-block">
          <pre><code>let name: string = "Rogue";
let age: number = 5;
let isFox: boolean = true;</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'ts-2': `
      <div class="lesson-block">
        <h3>Interfaces</h3>
        <p>Interfaces define the shape of objects.</p>
        <div class="code-block">
          <pre><code>interface Person {
    name: string;
    age: number;
}

const rogue: Person = {
    name: "Rogue",
    age: 5
};</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'sql-1': `
      <div class="lesson-block">
        <h3>SELECT Queries</h3>
        <p>Retrieve data from a database table.</p>
        <div class="code-block">
          <pre><code>SELECT * FROM users;

SELECT name, email FROM users WHERE age > 18;</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'sql-2': `
      <div class="lesson-block">
        <h3>Filtering with WHERE</h3>
        <p>Use WHERE to filter query results.</p>
        <div class="code-block">
          <pre><code>-- Find users named "Rogue"
SELECT * FROM users WHERE name = 'Rogue';

-- Find users older than 21
SELECT * FROM users WHERE age > 21;

-- Combine conditions
SELECT * FROM users WHERE age > 18 AND name LIKE '%Fox%';</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'go-1': `
      <div class="lesson-block">
        <h3>Hello, Go</h3>
        <p>Go is a compiled language that's simple and efficient.</p>
        <div class="code-block">
          <pre><code>package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Save as <code>main.go</code> and run with <code>go run main.go</code></p>
      </div>
    `,
    'go-2': `
      <div class="lesson-block">
        <h3>Packages</h3>
        <p>Organize your Go code into packages.</p>
        <div class="code-block">
          <pre><code>package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("Random number:", rand.Intn(100))
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'rust-1': `
      <div class="lesson-block">
        <h3>Hello, Rust</h3>
        <p>Rust is a systems programming language focused on safety and performance.</p>
        <div class="code-block">
          <pre><code>fn main() {
    println!("Hello, World!");
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'rust-2': `
      <div class="lesson-block">
        <h3>Ownership</h3>
        <p>Rust's unique ownership model ensures memory safety.</p>
        <div class="code-block">
          <pre><code>fn main() {
    let s = String::from("hello");
    takes_ownership(s);
}

fn takes_ownership(s: String) {
    println!("{}", s);
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'ruby-1': `
      <div class="lesson-block">
        <h3>Hello, Ruby</h3>
        <p>Ruby is a dynamic, reflective language focused on developer happiness.</p>
        <div class="code-block">
          <pre><code>puts "Hello, World!"

name = "Rogue"
age = 5
puts "I am "+ name + " and I am " + age.to_s + " years old"</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'ruby-2': `
      <div class="lesson-block">
        <h3>Blocks</h3>
        <p>Blocks are Ruby's way of passing functions as arguments.</p>
        <div class="code-block">
          <pre><code>[1, 2, 3].each do |number|
  puts number * 2
end

[1, 2, 3].each { |n| puts n * 2 }</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'java-1': `
      <div class="lesson-block">
        <h3>Hello, Java</h3>
        <p>Java is a verbose, object-oriented language that runs on the JVM.</p>
        <div class="code-block">
          <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <p>Save as <code>HelloWorld.java</code>, compile with <code>javac HelloWorld.java</code>, and run with <code>java HelloWorld</code></p>
      </div>
    `,
    'java-2': `
      <div class="lesson-block">
        <h3>Classes</h3>
        <p>Everything in Java is a class.</p>
        <div class="code-block">
          <pre><code>public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("I am " + name + " and I am " + age + " years old");
    }
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'c-1': `
      <div class="lesson-block">
        <h3>Hello, C</h3>
        <p>C is a low-level language that's the foundation for many others.</p>
        <div class="code-block">
          <pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\n");
    return 0;
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'c-2': `
      <div class="lesson-block">
        <h3>Pointers</h3>
        <p>Pointers are variables that store memory addresses.</p>
        <div class="code-block">
          <pre><code>#include &lt;stdio.h&gt;

int main() {
    int x = 10;
    int *ptr = &x;
    printf("Value: %d\n", x);
    printf("Address: %p\n", (void *)ptr);
    printf("Value via pointer: %d\n", *ptr);
    return 0;
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'php-1': `
      <div class="lesson-block">
        <h3>Hello, PHP</h3>
        <p>PHP is a server-side scripting language for web development.</p>
        <div class="code-block">
          <pre><code>&lt;?php
    echo "Hello, World!";
?&gt;</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'php-2': `
      <div class="lesson-block">
        <h3>Forms</h3>
        <p>Handle form submissions in PHP.</p>
        <div class="code-block">
          <pre><code>&lt;?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    echo "Hello, " . htmlspecialchars($name);
}
?&gt;
&lt;form method="post"&gt;
    &lt;input type="text" name="name"&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'shell-1': `
      <div class="lesson-block">
        <h3>Basic Commands</h3>
        <p>Essential shell commands for navigating and manipulating files.</p>
        <div class="code-block">
          <pre><code># Navigate directories
cd /path/to/directory
pwd

# List files
ls -la

# Create and remove
mkdir new_directory
touch new_file.txt
rm file_to_delete.txt

# View file content
cat file.txt
less file.txt</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'shell-2': `
      <div class="lesson-block">
        <h3>Scripts</h3>
        <p>Write reusable shell scripts.</p>
        <div class="code-block">
          <pre><code>#!/bin/bash

# Hello world script
echo "Hello, World!"

# Variables
NAME="Rogue"
echo "Hello, $NAME"

# Command line arguments
echo "First argument: $1"
echo "Second argument: $2"

# Make executable: chmod +x script.sh</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'swift-1': `
      <div class="lesson-block">
        <h3>Hello, Swift</h3>
        <p>Swift is Apple's modern language for iOS and macOS development.</p>
        <div class="code-block">
          <pre><code>import Swift

print("Hello, World!")

let name = "Rogue"
var age = 5
print("I am \(name) and I am \(age) years old")</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `,
    'swift-2': `
      <div class="lesson-block">
        <h3>Optionals</h3>
        <p>Optionals handle the absence of a value safely.</p>
        <div class="code-block">
          <pre><code>var name: String? = "Rogue"

if let unwrappedName = name {
    print("Hello, \(unwrappedName)")
}

func greet(name: String?) {
    guard let name = name else {
        print("Hello, stranger")
        return
    }
    print("Hello, \(name)")
}</code></pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
      </div>
    `
  };
  
  return lessons[lessonId] || `
    <div class="lesson-block">
      <h3>Lesson Content</h3>
      <p>Content for this lesson is coming soon!</p>
    </div>
  `;
}

// Generate language lesson content
function generateLanguageLesson(courseId, lessonId) {
  const lessons = {
    // Hawaiian
    'hawaiian-1': `
      <div class="lesson-block">
        <h3>Hawaiian Greetings</h3>
        <p>Learn basic greetings in Hawaiian.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Aloha</span><span class="pronunciation">ah-LOH-hah</span><span class="meaning">Hello / Goodbye / Love</span></div>
          <div class="vocab-item"><span class="word">E komo mai</span><span class="pronunciation">eh KOH-moh my</span><span class="meaning">Welcome</span></div>
          <div class="vocab-item"><span class="word">Mahalo</span><span class="pronunciation">mah-HAH-loh</span><span class="meaning">Thank you</span></div>
        </div>
        <p><em>Practice:</em> Try saying these words out loud.</p>
      </div>
    `,
    'hawaiian-2': `
      <div class="lesson-block">
        <h3>Common Phrases</h3>
        <p>Essential everyday phrases in Hawaiian.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Ae</span><span class="pronunciation">eye</span><span class="meaning">Yes</span></div>
          <div class="vocab-item"><span class="word">ʻAʻole</span><span class="pronunciation">AH-oh-leh</span><span class="meaning">No</span></div>
          <div class="vocab-item"><span class="word">Pehea ʻoe?</span><span class="pronunciation">peh-HEH-ah oh-eh</span><span class="meaning">How are you?</span></div>
        </div>
      </div>
    `,
    // Welsh
    'welsh-1': `
      <div class="lesson-block">
        <h3>Welsh Greetings</h3>
        <p>Learn basic greetings in Welsh.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Helô</span><span class="pronunciation">HEH-loh</span><span class="meaning">Hello</span></div>
          <div class="vocab-item"><span class="word">Croeso</span><span class="pronunciation">KROH-soh</span><span class="meaning">Welcome</span></div>
          <div class="vocab-item"><span class="word">Diolch</span><span class="pronunciation">DEE-olkh</span><span class="meaning">Thank you</span></div>
        </div>
      </div>
    `,
    'welsh-2': `
      <div class="lesson-block">
        <h3>Common Phrases</h3>
        <p>Essential everyday phrases in Welsh.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Ie</span><span class="pronunciation">yeh</span><span class="meaning">Yes</span></div>
          <div class="vocab-item"><span class="word">Nage</span><span class="pronunciation">NAH-geh</span><span class="meaning">No</span></div>
          <div class="vocab-item"><span class="word">Sut mae?</span><span class="pronunciation">seat my</span><span class="meaning">How are you?</span></div>
        </div>
      </div>
    `,
    // Latin
    'latin-1': `
      <div class="lesson-block">
        <h3>Basic Latin Phrases</h3>
        <p>Learn some common Latin phrases.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Salve</span><span class="pronunciation">SAHL-weh</span><span class="meaning">Hello</span></div>
          <div class="vocab-item"><span class="word">Vale</span><span class="pronunciation">WAH-leh</span><span class="meaning">Goodbye</span></div>
          <div class="vocab-item"><span class="word">Gratias ago</span><span class="pronunciation">GRAH-tee-ahs AH-goh</span><span class="meaning">Thank you</span></div>
        </div>
      </div>
    `,
    'latin-2': `
      <div class="lesson-block">
        <h3>Nouns and Verbs</h3>
        <p>Learn some basic Latin words.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">puella</span><span class="pronunciation">POO-el-lah</span><span class="meaning">girl</span></div>
          <div class="vocab-item"><span class="word">puer</span><span class="pronunciation">POO-er</span><span class="meaning">boy</span></div>
          <div class="vocab-item"><span class="word">ambulo</span><span class="pronunciation">AM-boo-loh</span><span class="meaning">I walk</span></div>
        </div>
      </div>
    `,
    // Church Slavonic
    'church-slavonic-1': `
      <div class="lesson-block">
        <h3>The Cyrillic Alphabet</h3>
        <p>Learn the first five Cyrillic letters.</p>
        <div class="alphabet-grid">
          <div class="letter-card"><span class="letter">А а</span><span class="name">Az</span><span class="sound">/a/</span></div>
          <div class="letter-card"><span class="letter">Б б</span><span class="name">Buky</span><span class="sound">/b/</span></div>
          <div class="letter-card"><span class="letter">В в</span><span class="name">Vedi</span><span class="sound">/v/</span></div>
          <div class="letter-card"><span class="letter">Г г</span><span class="name">Glagol</span><span class="sound">/g/</span></div>
          <div class="letter-card"><span class="letter">Д д</span><span class="name">Dobro</span><span class="sound">/d/</span></div>
        </div>
      </div>
    `,
    'church-slavonic-2': `
      <div class="lesson-block">
        <h3>Common Words</h3>
        <p>Learn some common Church Slavonic words.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Богъ</span><span class="pronunciation">Bog</span><span class="meaning">God</span></div>
          <div class="vocab-item"><span class="word">Господь</span><span class="pronunciation">Gospod</span><span class="meaning">Lord</span></div>
          <div class="vocab-item"><span class="word">Слово</span><span class="pronunciation">Slovo</span><span class="meaning">Word</span></div>
        </div>
      </div>
    `,
    // Spanish
    'spanish-1': `
      <div class="lesson-block">
        <h3>Spanish Greetings</h3>
        <p>Learn basic greetings in Spanish.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Hola</span><span class="pronunciation">OH-lah</span><span class="meaning">Hello</span></div>
          <div class="vocab-item"><span class="word">Buenos días</span><span class="pronunciation">BWEH-nohs DEE-ahs</span><span class="meaning">Good morning</span></div>
          <div class="vocab-item"><span class="word">Adiós</span><span class="pronunciation">ah-DEE-ohs</span><span class="meaning">Goodbye</span></div>
        </div>
      </div>
    `,
    'spanish-2': `
      <div class="lesson-block">
        <h3>Common Phrases</h3>
        <p>Essential everyday phrases in Spanish.</p>
        <div class="vocab-list">
          <div class="vocab-item"><span class="word">Por favor</span><span class="pronunciation">por fah-VOR</span><span class="meaning">Please</span></div>
          <div class="vocab-item"><span class="word">Gracias</span><span class="pronunciation">GRAH-syahs</span><span class="meaning">Thank you</span></div>
          <div class="vocab-item"><span class="word">¿Cómo estás?</span><span class="pronunciation">KOH-moh es-TAHS</span><span class="meaning">How are you?</span></div>
        </div>
      </div>
    `,
    // Hiragana
    'hiragana-1': `
      <div class="lesson-block">
        <h3>First Five Hiragana</h3>
        <p>Learn the first five hiragana characters.</p>
        <div class="kana-grid">
          <div class="kana-card"><span class="kana">あ</span><span class="romaji">a</span><span class="sound">/a/</span></div>
          <div class="kana-card"><span class="kana">い</span><span class="romaji">i</span><span class="sound">/i/</span></div>
          <div class="kana-card"><span class="kana">う</span><span class="romaji">u</span><span class="sound">/u/</span></div>
          <div class="kana-card"><span class="kana">え</span><span class="romaji">e</span><span class="sound">/e/</span></div>
          <div class="kana-card"><span class="kana">お</span><span class="romaji">o</span><span class="sound">/o/</span></div>
        </div>
      </div>
    `,
    'hiragana-2': `
      <div class="lesson-block">
        <h3>Next Five Hiragana</h3>
        <p>Learn the next five hiragana characters.</p>
        <div class="kana-grid">
          <div class="kana-card"><span class="kana">か</span><span class="romaji">ka</span><span class="sound">/ka/</span></div>
          <div class="kana-card"><span class="kana">き</span><span class="romaji">ki</span><span class="sound">/ki/</span></div>
          <div class="kana-card"><span class="kana">く</span><span class="romaji">ku</span><span class="sound">/ku/</span></div>
          <div class="kana-card"><span class="kana">け</span><span class="romaji">ke</span><span class="sound">/ke/</span></div>
          <div class="kana-card"><span class="kana">こ</span><span class="romaji">ko</span><span class="sound">/ko/</span></div>
        </div>
      </div>
    `
  };
  
  return lessons[lessonId] || `
    <div class="lesson-block">
      <h3>Lesson Content</h3>
      <p>Content for this lesson is coming soon!</p>
    </div>
  `;
}

// Generate invented language lesson content
function generateInventedLesson(courseId, lessonId) {
  const lessons = {
    // Enchanting Table
    'enchanting-1': `
      <div class="lesson-block">
        <h3>Basic Runes</h3>
        <p>Decode the runes floating around the enchanting table.</p>
        <div class="runes-grid">
          <div class="rune-card"><span class="rune">ᚠ</span><span class="name">Fehu</span><span class="meaning">Wealth</span></div>
          <div class="rune-card"><span class="rune">ᚢ</span><span class="name">Uruz</span><span class="meaning">Strength</span></div>
          <div class="rune-card"><span class="rune">ᚦ</span><span class="name">Thurisaz</span><span class="meaning">Giant</span></div>
          <div class="rune-card"><span class="rune">ᚨ</span><span class="name">Ansuz</span><span class="meaning">God</span></div>
        </div>
        <p><em>Puzzle:</em> These are Elder Futhark runes.</p>
      </div>
    `,
    'enchanting-2': `
      <div class="lesson-block">
        <h3>Advanced Runes</h3>
        <p>Master the enchanting table's more complex runes.</p>
        <div class="runes-grid">
          <div class="rune-card"><span class="rune">ᚱ</span><span class="name">Raido</span><span class="meaning">Journey</span></div>
          <div class="rune-card"><span class="rune">ᚲ</span><span class="name">Kano</span><span class="meaning">Torch</span></div>
          <div class="rune-card"><span class="rune">ᚷ</span><span class="name">Gebo</span><span class="meaning">Gift</span></div>
          <div class="rune-card"><span class="rune">ᚹ</span><span class="name">Wunjo</span><span class="meaning">Joy</span></div>
        </div>
      </div>
    `,
    // Dovahzul
    'dovahzul-1': `
      <div class="lesson-block">
        <h3>The Dragon Alphabet</h3>
        <p>Learn the Dovahzul script from The Elder Scrolls.</p>
        <div class="dovahzul-alphabet">
          <div class="dovahzul-row"><span class="letter">D</span><span class="letter">O</span><span class="letter">V</span><span class="letter">A</span><span class="letter">H</span></div>
          <div class="dovahzul-row"><span class="letter">N</span><span class="letter">I</span><span class="letter">K</span><span class="letter">S</span><span class="letter">T</span></div>
          <div class="dovahzul-row"><span class="letter">R</span><span class="letter">M</span><span class="letter">E</span><span class="letter">L</span><span class="letter">B</span></div>
        </div>
      </div>
    `,
    'dovahzul-2': `
      <div class="lesson-block">
        <h3>Dragon Shouts</h3>
        <p>Master the powerful shouts used by dragons and Dragonborn.</p>
        <div class="shouts-list">
          <div class="shout"><span class="shout-name">Fus Ro Dah</span><span class="shout-meaning">Force Push</span></div>
          <div class="shout"><span class="shout-name">Whirlwind Sprint</span><span class="shout-meaning">Rapid Movement</span></div>
          <div class="shout"><span class="shout-name">Unrelenting Force</span><span class="shout-meaning">Powerful Push</span></div>
        </div>
      </div>
    `
  };
  
  return lessons[lessonId] || `
    <div class="lesson-block">
      <h3>Lesson Content</h3>
      <p>Content for this lesson is coming soon!</p>
    </div>
  `;
}

// Make functions available globally
window.copyCode = copyCode;
window.generateCodingLesson = generateCodingLesson;
window.generateLanguageLesson = generateLanguageLesson;
window.generateInventedLesson = generateInventedLesson;
