package main

import (
	"Ga1ors/database"
	"Ga1ors/msgdatabase"
	"Ga1ors/routes"

	//"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// Resource: 'https://www.udemy.com/course/angular-go-admin/'
func main() {

	database.Connect()

	msgdatabase.ConnectMsg()

	app := fiber.New()

	app.Use(cors.New(cors.Config{ // block requests from different ports, allows frontend to get cookies
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":8000")

	//messageLoop()

}

/*
type message struct {
	user    string
	message string
	time    string
}

func (m message) printMessage() {
	fmt.Println(m.time+"\t", m.user+": ", "\n\t\t"+m.message)

}

func messageLoop() {

	var maxMessages int = 5 //Max number of messages (5 for testing purposes)
	var charLimit int = 30
	var messages [5]message //string array cant be created using maxMessages as size, I think maxMessages needs to be converted to static type

	reader := bufio.NewReader(os.Stdin) //reads userinput

	var messageCounter int = 0 //Counts how many messages have been entered

	var looper1 int = 0 //loopers used to control loops
	var looper2 int = 0

	var UNinput string

	//go's weird version of while loops

	for looper1 <= maxMessages { //until array reaches capacity

		fmt.Print("\033[H\033[2J") //clears screen, the reason I'm clearing the screen is so that I can print the chat log then have message prompt add bottom

		fmt.Println("Welcome to the Ga1ors chat Forum!") //UI header
		fmt.Println("[ Signed in as", UNinput, "]")
		fmt.Print("\n")

		if looper1 != 0 { //start printing messages only after the first one is written

			for looper2 < messageCounter { //prints all the messages currently written
				messages[looper2].printMessage()
				looper2++
			}

		}

		if looper1 != maxMessages { // prompt for message if
			fmt.Print("Message: ")
			input, _ := reader.ReadString('\n')
			input = strings.TrimSpace(input)
			dt := time.Now() //Time var

			if len(input) == 0 {
				fmt.Print("Please enter a valid message")
				time.Sleep(1 * time.Second)
				looper1-- //decriminate to not affect message limit
				messageCounter--
			} else if len(input) <= charLimit { //if valid message
				temp := message{UNinput, input, dt.Format(time.Kitchen)} //object creation
				messages[looper1] = temp                                 //object push
			} else { //if over char limit
				fmt.Print("Message over character limit ", charLimit, " characters maximum")
				time.Sleep(1 * time.Second)
				looper1-- //decriminate to not affect message limit
				messageCounter--
			}

		}

		looper1++ //iterate loop
		looper2 = 0
		messageCounter++
	}
	fmt.Print("The message limit has been reached for today, messages reset 12:00AM EST every day.")

}
*/
