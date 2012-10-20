# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response, get_object_or_404, get_list_or_404, redirect
from django.http import HttpResponseRedirect, Http404, HttpResponse
from django.conf.urls.defaults import *
from datetime import date
from django.contrib.auth import authenticate, login
from django.conf import settings
from django.core.mail import send_mail
from mapwire import functions


def home(request):
    OSM_KEY = settings.OSM_KEY
    return render_to_response('base.html', locals())


def search(request, query):
    places = functions.get_results(query)
    #p.displayname = places.displayname
    return render_to_response('search.html', locals())
