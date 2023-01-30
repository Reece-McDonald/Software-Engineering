package message

import (
	"fmt"
)

type message struct {
	user    string
	message string
	time    string
}

func (m message) printMessage() {

	fmt.Println(m.user, ": ", m.message, "				", m.time)
}
