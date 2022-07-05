USER=node
CURDIR=.
WORKDIR=/home/node/app
VOLUME=$(CURDIR):$(WORKDIR)
NODE_NPM_IMAGE=deviant/front:latest
RUN_NODE_NPM=docker run -rm -it -u $(USER) -v $(VOLUME) -w $(WORKDIR) $(NODE-NPM-IMAGE)


build: prepare
    $(RUN_NODE_NPM) npm run build

prepare:
	docker build -t ${NODE_NPM_IMAGE} ${CURDIR}

.PHONY: build dev all clean test