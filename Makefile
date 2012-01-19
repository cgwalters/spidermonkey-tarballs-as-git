all:
	cd js/src && $(MAKE)

install:
	cd js/src && $(MAKE) install DESTDIR=$(DESTDIR)
