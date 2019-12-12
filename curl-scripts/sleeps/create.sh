curl "http://localhost:4741/sleeps" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "sleep": {
      "hours": "'"${HOURS}"'",
      "exercise": "'"${EXERCISE}"'",
      "food": "'"${FOOD}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
