# Alter

A universal url mapper to RSSHub APIs

## How to use

Install Alter

`npm i @team-arcadian/alter`

Create an alter feed snapshot by calling `alter`

```
const rss = await alter('https://twitter.com/timthetatman')
```

This `rss` variable looks like:

```
{
    items: [
        {content: "Really enjoying the new modern warf..."},
        {content: "Really enjoying the new modern warf..."},
        {content: "Really enjoying the new modern warf..."}
    ]
}
```

Thats it!

Notes - `alter` returns a snapshot of the RSS feed, not an observable or event bus.

For most cases you want to watch the feed and update with new information, so `alter` includes a utility function, `watch`

`watch` takes the `alter` feed and a timer configuration for when to update.

```
const feed = watch(alter('https://twitter.com/timthetatman'), {timeout: 60}) // 1 minute watch time
```
