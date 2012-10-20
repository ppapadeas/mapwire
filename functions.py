# -*- coding: utf-8 -*-

def get_results(query):
    import urllib2, json
    #from BeautifulSoup import BeautifulSoup
    jsonurl = urllib2.urlopen("http://open.mapquestapi.com/nominatim/v1/search?format=json&q=%s" % query)
    data = json.load(jsonurl)
    places = data
    #soup = BeautifulSoup(xml)
    #places = {}
    #places = soup.searchresults.findAll('place')
    #for place in soup.findALL('place'):
    #    places = dict(place.attrs)
    #places = soup.findALL('place')
    #places = soup.searchresults.place['display_name']
    return places
