# PageSpeed Insights Bot
It fetches the score of your page and message you with the status.

# Usage
Just mention the bot or direct message it with the URL to your page.

```
@pagespeed http://http://www.carlosbaraza.com/
```

# Build and run
```
docker build -t carlosbaraza/pagespeed-insights-bot:latest .
```

then run the image setting the bot token as an env variable:

```
docker run -e token=randomtoken12345 carlosbaraza/pagespeed-insights-bot:latest
```

# Roadmap
- [x] Direct message + URL
- [x] Mention bot + URL
- [x] Simple integration with Slack
- [ ] Cron job monitoring score and warning when threshold is met
- [ ] Ability to configure bot
- [ ] Other messaging applications
