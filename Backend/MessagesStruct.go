package message

import (
	"fmt"
)

type message struct {
	user    string
	message string
	time    int
}

func (m message) printMessage() {

	fmt.Println(m.user, ": ", m.message, "				", m.time)
}
