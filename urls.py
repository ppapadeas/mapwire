# -*- coding: utf-8 -*-
from django.conf.urls.defaults import *
from django.conf import settings
from django.views.generic.simple import direct_to_template

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'mapwire.views.home', name='home'),
    url(r'^manifest\.webapp/', 'mapwire.views.manifest', name='manifest'),
    #url(r'search/(?P<query>[a-z0-9-.]+)/$', 'mapwire.views.search', name='search'),
    url('^search/(?P<query>.*)$', 'mapwire.views.search', name='search'),

    #admin
    #url(r'^admin/', include(admin.site.urls)),

    (r'^robots\.txt$', direct_to_template, {'template': 'robots.txt', 'mimetype': 'text/plain'}),
    #(r'^manifest\.webapp$', direct_to_template, {'template': 'manifest.webapp', 'mimetype': 'text/plain'}),
)


if settings.SERVE_MEDIA:
    urlpatterns += patterns('',
        (r'^.*?media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )
