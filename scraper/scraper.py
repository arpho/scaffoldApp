import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        txt = "https://www.franknet.altervista.org/lotto/{year}.HTM"
        urls = [
          """  'https://quotes.toscrape.com/page/1/',
            'https://quotes.toscrape.com/page/2/',"""
        ]
        for y in range(1871,2022):
            urls.append((txt.format(year = y)))
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')