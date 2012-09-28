# -*- coding: utf-8 -*-

def get_results(query):
    import urllib2
    from BeautifulSoup import BeautifulSoup
    xml = urllib2.urlopen("http://open.mapquestapi.com/nominatim/v1/search?format=xml&q=%s" % query)
    soup = BeautifulSoup(xml)
    #places = {}
    places = soup.searchresults.findAll('place')
    #for place in soup.findALL('place'):
    #    places = dict(place.attrs)
    #places = soup.findALL('place')
    #places = soup.searchresults.place['display_name']
    return places
