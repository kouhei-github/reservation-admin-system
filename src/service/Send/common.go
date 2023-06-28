package Send

type PostSns interface {
	PostToSend(text string)
}
