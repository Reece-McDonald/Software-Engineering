package main

import ( //Imports
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {

	var maxMessages int = 5 //Max number of messages (5 for testing purposes)
	var messages [5]string  //string array cant be created using maxMessages as size, I think maxMessages needs to be converted to static type

	reader := bufio.NewReader(os.Stdin) //reads userinput

	var messageCounter int = 0 //Counts how many messages have been entered

	var looper1 int = 0 //loopers used to control loops
	var looper2 int = 0

	fmt.Println("Welcome to the Ga1ors chat Forum!") //Init UI header and username input
	fmt.Print("UserName: ")

	UNinput, _ := reader.ReadString('\n')
	UNinput = strings.TrimSpace(UNinput)

	//go's weird version of while loops

	for looper1 <= maxMessages { //until array reaches capacity

		dt := time.Now()           //Time var
		fmt.Print("\033[H\033[2J") //clears screen, the reason I'm clearing the screen is so that I can print the chat log then have message prompt add bottom

		fmt.Println("Welcome to the Ga1ors chat Forum!") //UI header
		fmt.Println("[ Signed in as", UNinput, "]")
		fmt.Print("\n")

		if looper1 != 0 { //start printing messages only after the first one is written

			for looper2 < messageCounter { //prints all the messages currently written
				fmt.Println(UNinput, ": ", messages[looper2], "				", dt.Format(time.Kitchen))

				looper2++
			}

		}

		if looper1 != maxMessages { // prompt for message if
			fmt.Print("Message: ")
			input, _ := reader.ReadString('\n')
			input = strings.TrimSpace(input)

			messages[looper1] = input
		}

		looper1++ //iterate loop
		looper2 = 0
		messageCounter++
	}

}
