package Send

import "strings"

type Slack struct {
	Channel string
	Secret  string
	token   string
	roomId  string
}

func (slack *Slack) PostToSend(text string) {
	strings.ToUpper(slack.roomId)
}

func Run() {
	slack := &Slack{}
	test(slack, "")
}

func test(sendTo PostSns, text string) {
	sendTo.PostToSend(text)
}
