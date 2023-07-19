# Pre-requisites

Read [GOOGLE_CLOUD.md](https://github.com/cduployez/ansible-playbook/blob/main/GOOGLE_CLOUD.md) from [ansible-playbook project](https://github.com/cduployez/ansible-playbook) to:
* Init project
* Init cluster
* Init artifact registry

# Init

## Build container on Google Cloud

```sh
cd ~/workspace/angular-resume
gcloud builds submit --tag europe-west9-docker.pkg.dev/back-resume/resume-repository/angular-resume .
```

Output:
```
Creating temporary tarball archive of 159 file(s) totalling 641.3 KiB before compression.
Some files were not included in the source upload.

Check the gcloud log [/home/cduployez/.config/gcloud/logs/2023.07.18/17.01.20.514765.log] to see which files and the contents of the
default gcloudignore file used (see `$ gcloud topic gcloudignore` to learn
more).

Uploading tarball of [.] to [gs://back-resume_cloudbuild/source/1689692480.641164-28b119d375ed4d9786b244462d3cb903.tgz]
Created [https://cloudbuild.googleapis.com/v1/projects/back-resume/locations/global/builds/cb870540-7301-47ca-b1fe-65a628857d21].
Logs are available at [ https://console.cloud.google.com/cloud-build/builds/cb870540-7301-47ca-b1fe-65a628857d21?project=486595493439 ].
---------------------------------------------------------------------------------------- REMOTE BUILD OUTPUT -----------------------------------------------------------------------------------------
starting build "cb870540-7301-47ca-b1fe-65a628857d21"

FETCHSOURCE
Fetching storage object: gs://back-resume_cloudbuild/source/1689692480.641164-28b119d375ed4d9786b244462d3cb903.tgz#1689692483053677
Copying gs://back-resume_cloudbuild/source/1689692480.641164-28b119d375ed4d9786b244462d3cb903.tgz#1689692483053677...
/ [1 files][195.4 KiB/195.4 KiB]
Operation completed over 1 objects/195.4 KiB.
BUILD
Already have image (with digest): gcr.io/cloud-builders/docker
Sending build context to Docker daemon  806.4kB
Step 1/10 : FROM node:18.16.1 as build-stage
18.16.1: Pulling from library/node
d52e4f012db1: Already exists
7dd206bea61f: Already exists
2320f9be4a9c: Already exists
6e5565e0ba8d: Already exists
5f1526a28cf9: Already exists
2f0191f7d60a: Pulling fs layer
1104f0e2cc5e: Pulling fs layer
3f3e951e9c53: Pulling fs layer
3f3e951e9c53: Verifying Checksum
3f3e951e9c53: Download complete
1104f0e2cc5e: Verifying Checksum
1104f0e2cc5e: Download complete
2f0191f7d60a: Verifying Checksum
2f0191f7d60a: Download complete
2f0191f7d60a: Pull complete
1104f0e2cc5e: Pull complete
3f3e951e9c53: Pull complete
Digest: sha256:f4698d49371c8a9fa7dd78b97fb2a532213903066e47966542b3b1d403449da4
Status: Downloaded newer image for node:18.16.1
 ---> 4ef2979d73d4
Step 2/10 : WORKDIR /app
 ---> Running in 24ec1077db4d
Removing intermediate container 24ec1077db4d
 ---> cc0951e93f9b
Step 3/10 : COPY package*.json /app/
 ---> 93de9c7a3aab
Step 4/10 : RUN npm install
 ---> Running in 4a8e1fa3ac9f
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
npm WARN deprecated protractor@7.0.0: We have news to share - Protractor is deprecated and will reach end-of-life by Summer 2023. To learn more and find out about other options please refer to this post on the Angular blog. Thank you for using and contributing to Protractor. https://goo.gle/state-of-e2e-in-angular
npm WARN deprecated tslint@6.1.3: TSLint has been deprecated in favor of ESLint. Please see https://github.com/palantir/tslint/issues/4534 for more information.

added 1013 packages, and audited 1014 packages in 40s

87 packages are looking for funding
  run `npm fund` for details

13 vulnerabilities (11 moderate, 2 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm notice
npm notice New minor version of npm available! 9.5.1 -> 9.8.0
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.8.0>
npm notice Run `npm install -g npm@9.8.0` to update!
npm notice
Removing intermediate container 4a8e1fa3ac9f
 ---> 3364990457f2
Step 5/10 : COPY ./ /app/
 ---> 6e4492c5d206
Step 6/10 : ARG configuration=production
 ---> Running in 0640baf060d3
Removing intermediate container 0640baf060d3
 ---> 9ed342f2f961
Step 7/10 : RUN npm run build -- --output-path=./dist/out --configuration $configuration
 ---> Running in 8f69957697f2

> angular-resume@1.0.0 build
> ng build --output-path=./dist/out --configuration production
- Generating browser application bundles (phase: setup)...
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.6d55767329b019c7.js      | main          | 303.51 kB |                83.53 kB
polyfills.a13c3a85cb5a7d65.js | polyfills     |  33.10 kB |                10.64 kB
styles.4f59b4909c820f19.css   | styles        |   1.34 kB |               459 bytes
runtime.3afad136342b71e2.js   | runtime       |   1.05 kB |               595 bytes

| Initial Total | 339.00 kB |                95.20 kB

Build at: 2023-07-18T15:03:46.944Z - Hash: ef0f5d476a8f796c - Time: 49835ms

Warning: /app/src/app/services/ui/icons.service.ts depends on '@fortawesome/free-solid-svg-icons/faMoon'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies
Removing intermediate container 8f69957697f2
 ---> adfd5b6f3f7d
Step 8/10 : FROM nginx:1.15
1.15: Pulling from library/nginx
743f2d6c1f65: Pulling fs layer
6bfc4ec4420a: Pulling fs layer
688a776db95f: Pulling fs layer
688a776db95f: Verifying Checksum
688a776db95f: Download complete
743f2d6c1f65: Verifying Checksum
743f2d6c1f65: Download complete
6bfc4ec4420a: Verifying Checksum
6bfc4ec4420a: Download complete
743f2d6c1f65: Pull complete
6bfc4ec4420a: Pull complete
688a776db95f: Pull complete
Digest: sha256:23b4dcdf0d34d4a129755fc6f52e1c6e23bb34ea011b315d87e193033bcd1b68
Status: Downloaded newer image for nginx:1.15
 ---> 53f3fd8007f7
Step 9/10 : COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
 ---> fa0527d4598a
Step 10/10 : COPY ./nginx.conf /etc/nginx/nginx.conf
 ---> a43da29d74b7
Successfully built a43da29d74b7
Successfully tagged europe-west9-docker.pkg.dev/back-resume/resume-repository/angular-resume:latest
PUSH
Pushing europe-west9-docker.pkg.dev/back-resume/resume-repository/angular-resume
The push refers to repository [europe-west9-docker.pkg.dev/back-resume/resume-repository/angular-resume]
6a6476447b76: Preparing
b7ca767d6803: Preparing
332fa54c5886: Preparing
6ba094226eea: Preparing
6270adb5794c: Preparing
6a6476447b76: Pushed
b7ca767d6803: Pushed
332fa54c5886: Pushed
6ba094226eea: Pushed
6270adb5794c: Pushed
latest: digest: sha256:23dbf70fe08e5293f51c72bc827020a5545f9c7044da85f7c6c96fe70c6b359f size: 1365
DONE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ID                                    CREATE_TIME                DURATION  SOURCE                                                                                     IMAGES
                                                    STATUS
cb870540-7301-47ca-b1fe-65a628857d21  2023-07-18T15:01:23+00:00  2M46S     gs://back-resume_cloudbuild/source/1689692480.641164-28b119d375ed4d9786b244462d3cb903.tgz  europe-west9-docker.pkg.dev/back-resume/resume-repository/angular-resume (+1 more)  SUCCESS
```

# Deploy to GKE

Deploy deployment:
```sh
cd helm-chart
kubectl apply -f deployment.yaml
```

Output:
```
Warning: autopilot-default-resources-mutator:Autopilot updated Deployment default/back-resume: adjusted resources to meet requirements for containers [back-resume] (see http://g.co/gke/autopilot-resources)
deployment.apps/back-resume created
```

Deploy service (+ load balancer):
```sh
kubectl apply -f service.yaml
```

Output:
```
service/back-resume created
```

```sh
kubectl get services
```

```
NAME           TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
back-resume    LoadBalancer   10.89.1.104   34.155.197.167   80:32190/TCP   85s
hello-server   LoadBalancer   10.89.2.115   34.163.40.252    80:31645/TCP   2d13h
kubernetes     ClusterIP      10.89.0.1     <none>           443/TCP        2d14h
```

# Deploy helm-chart

First time:
```sh
cd helm-chart
helm package . && helm install back-resume back-resume-helm-chart-0.0.1.tgz
```

If existing in GKE:
```sh
cd helm-chart
helm package . && helm install back-resume back-resume-helm-chart-0.0.1.tgz
```

# Configure cert-manager

Links:
* https://cert-manager.io/docs/tutorials/acme/nginx-ingress/
* https://medium.com/bluekiri/deploy-a-nginx-ingress-and-a-certitificate-manager-controller-on-gke-using-helm-3-8e2802b979ec
* Workaround: https://github.com/cert-manager/cert-manager/issues/3717

```sh
# helm install cert-manager --namespace cert-manager jetstack/cert-manager
# Workaround needed for auto-pilot GKE cluster
helm install --create-namespace --namespace cert-manager --set installCRDs=true --set global.leaderElection.namespace=cert-manager cert-manager jetstack/cert-manager
```
