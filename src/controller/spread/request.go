package spread

type PostPayload struct {
	Auth      string `json:"auth"`
	SpreadId  string `json:"spread_id"`
	SheetName string `json:"sheet_name"`
}
