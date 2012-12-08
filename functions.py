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


def get_geocode(lat, lon):
    import urllib2
    from BeautifulSoup import BeautifulSoup
    xml = urllib2.urlopen("http://open.mapquestapi.com/nominatim/v1/reverse?format=xml&lat=%f&lon=%f&accept-language=en" % (lat, lon)).read()
    soup = BeautifulSoup(xml)
    geocode = {}
    try:
        geocode['country'] = soup.find("country").contents[0]
    except:
        geocode['country'] = ""

    try:
        geocode['city'] = soup.find("city").contents[0]
    except:
        geocode['city'] = ""

    try:
        geocode['suburb'] = soup.find("suburb").contents[0]
    except:
        geocode['suburb'] = ""

    try:
        geocode['road'] = soup.find("road").contents[0]
    except:
        geocode['road'] = ""

    try:
        geocode['house_number'] = soup.find("house_number").contents[0]
    except:
        geocode['house_number'] = ""

    return geocode
