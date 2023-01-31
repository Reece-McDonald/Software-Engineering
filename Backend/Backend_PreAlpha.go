package main

import ( //Imports
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

type message struct {
	user    string
	message string
	time    string
}

func (m message) printMessage() {

	fmt.Println(m.user, ": ", m.message, "				", m.time)
}

func main() {

	var maxMessages int = 5 //Max number of messages (5 for testing purposes)
	var charLimit int = 10
	var messages [5]message //string array cant be created using maxMessages as size, I think maxMessages needs to be converted to static type

	reader := bufio.NewReader(os.Stdin) //reads userinput

	var messageCounter int = 0 //Counts how many messages have been entered

	var looper1 int = 0 //loopers used to control loops
	var looper2 int = 0

	var UNinput string

	fmt.Println("Welcome to the Ga1ors chat Forum!") //Init UI header and username input
	var i bool = false
	for i != true {
		fmt.Print("UserName: ")

		User, _ := reader.ReadString('\n')
		User = strings.TrimSpace(User)
		if len(User) < 9 {
			fmt.Println("Invalid Email!")
			continue
		}
		var email int = len(User) - 8
		var dom string = string(User[email:len(User)])
		if dom != "@ufl.edu" {
			fmt.Println("Invalid Email!")
		} else {
			i = true
			UNinput = string(User[0:email])
		}
	}

	//go's weird version of while loops

	for looper1 <= maxMessages { //until array reaches capacity

		fmt.Print("\033[H\033[2J") //clears screen, the reason I'm clearing the screen is so that I can print the chat log then have message prompt add bottom

		fmt.Println("Welcome to the Ga1ors chat Forum!") //UI header
		fmt.Println("[ Signed in as", UNinput, "]")
		fmt.Print("\n")

		if looper1 != 0 { //start printing messages only after the first one is written

			for looper2 < messageCounter { //prints all the messages currently written
				//fmt.Println(UNinput, ": ", messages[looper2], "				", dt.Format(time.Kitchen))
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
				looper1--
				messageCounter--
			} else if len(input) <= charLimit {
				temp := message{UNinput, input, dt.Format(time.Kitchen)}
				messages[looper1] = temp
			} else {
				fmt.Print("Message over character limit ", charLimit, " characters maximum")
				time.Sleep(1 * time.Second)
				looper1--
				messageCounter--
			}

			/*
				if len(input) != 0 { //if valid message
					temp := message{UNinput, input, dt.Format(time.Kitchen)}
					messages[looper1] = temp
				} else { //if user presses enter without typing anything
					fmt.Print("Please enter a valid message")
					time.Sleep(1 * time.Second)
					looper1--
					messageCounter--
				}

			*/
		}

		looper1++ //iterate loop
		looper2 = 0
		messageCounter++
	}

}
