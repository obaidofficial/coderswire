import React from "react";
import TechComponents from "./TechComponents";
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    title: "Desktop",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/desktop/obj-c.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">OBJ-C</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/desktop/qt.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">QT</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/desktop/cpp.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">C++</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/desktop/swift.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Swift</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/desktop/csharp.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">C#</p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Back-End",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/python.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Python</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/dot-net.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">.NET</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/php.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">PHP</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/nodejs.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Node JS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/java.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Java</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/golang-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Golang</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/backend/redux.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Redux</p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Front-End",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/angular.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Angular</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/css.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">CSS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/html.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">HTML</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/javascript.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                JavaScript
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/meteor-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Meteor</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/next-js.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Next JS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/reactjs.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">React JS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/vuejs.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Vue JS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/frontend/ember-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Ember</p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "DevOps",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/ansible.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Ansible</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/aws-developer-tools.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                AWS Dev Tools
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/pometheus.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Pometheus
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/azure-devops.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Azure DevOps
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/grafana.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Grafana</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/puppet-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Puppet</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/chef.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Chef</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/jenkins-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Jenkins</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/salt-stack-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Salt Stack
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/ci-cd-logo.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">CI CD</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/kubernetes.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Kubernetes
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/terraform.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Terraform
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/data-dogs.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Data Dogs
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/mesos.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Mesos</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/zabbix.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Zabbix</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/docker.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Docker</p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/nagios.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Nagios</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/elastic-search.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Elastic Search
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/open-shift.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Open Shift
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/google-developers.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Google Developers
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/devops/packer.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Packer</p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud DB & Storage",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/cloud/amazon-rds.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Amazon RDS
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/cloud/aws-elastic-cache.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                AWS Elastic Cache
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/cloud/google-cloud-sql.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Google Cloud SQL
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/cloud/amazon-s3.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Amazon S3
              </p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Platforms",
    content: (
      <div className="w-[99%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/adobe-commerce.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Adobe Commerce
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/dynamics-365.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Dynamics 365
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/power-bi.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Power Bi</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/salesforce.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Sales Force
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/sharepoint.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Share Point
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/sap.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">SAP</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/platforms/service-now.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                Service Now
              </p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Mobile",
    content: (
      <div className="w-[96%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-0">
        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/androide.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Android</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/cordova.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Cordova</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/flutter.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Flutter</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/ios.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">iOS</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/reactnative.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">
                React Native
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/xamarin.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">Xamarin</p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href="#">
            <div className="bg-[#ffffff70] rounded-lg shadow-sm p-2 hover:bg-[#e6f7fa] m-2">
              <Image
                src="/images/tech/mobile/pwa.png"
                alt="a"
                width={300}
                height={300}
              />
              <p className="text-center font-bold text-[12px] mt-2">PWA</p>
            </div>
          </Link>
        </div>
      </div>
    ),
  },
];

const Tabs = () => {
  return (
    <div>
      <div className="w-[96%] mx-auto">
        <TechComponents items={items} />
      </div>
    </div>
  );
};

export default Tabs;
