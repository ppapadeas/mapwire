from django.conf.urls.defaults import *
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'mapwire.views.home', name='home'),
    
    #admin
    #url(r'^admin/', include(admin.site.urls)),
    
    url(r'^robots\.txt$', lambda r: HttpResponse("User-agent: *\nDisallow: /", mimetype="text/plain"))
)


if settings.SERVE_MEDIA:
    urlpatterns += patterns('',
        (r'^.*?media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )
