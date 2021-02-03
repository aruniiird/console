export const VIRT_LAUNCHER_POD_PREFIX = 'virt-launcher-';
export const ANNOTATION_FIRST_BOOT = 'kubevirt.ui/firstBoot';
export const ANNOTATION_DESCRIPTION = 'description';
export const ANNOTATION_PXE_INTERFACE = 'kubevirt.ui/pxeInterface';
export const ANNOTATION_VALIDATIONS = 'validations';
export const ANNOTATION_ICON = 'iconClass';
export const LABEL_CDROM_SOURCE = 'kubevirt.ui/cdrom';
export const ANNOTATION_SOURCE_PROVIDER = 'kubevirt.ui/provider';
export const CUSTOM_FLAVOR = 'Custom';

export const APP = 'app';
export const BOOT_ORDER_FIRST = 1;
export const BOOT_ORDER_SECOND = 2;

export const TEMPLATE_FLAVOR_LABEL = 'flavor.template.kubevirt.io';
export const TEMPLATE_OS_LABEL = 'os.template.kubevirt.io';
export const TEMPLATE_PARAM_VM_NAME = 'NAME';
export const TEMPLATE_PARAM_VM_NAME_DESC = 'Name for the new VM';
export const TEMPLATE_TYPE_LABEL = 'template.kubevirt.io/type';
export const TEMPLATE_VERSION_LABEL = 'template.kubevirt.io/version';
export const TEMPLATE_DEFAULT_LABEL = 'template.kubevirt.io/default-os-variant';
export const TEMPLATE_TYPE_VM = 'vm';
export const TEMPLATE_TYPE_BASE = 'base';
export const TEMPLATE_WORKLOAD_LABEL = 'workload.template.kubevirt.io';
export const TEMPLATE_VM_NAME_LABEL = 'vm.kubevirt.io/name';
export const TEMPLATE_OS_NAME_ANNOTATION = 'name.os.template.kubevirt.io';
export const TEMPLATE_BASE_IMAGE_NAME_PARAMETER = 'SRC_PVC_NAME';
export const TEMPLATE_BASE_IMAGE_NAMESPACE_PARAMETER = 'SRC_PVC_NAMESPACE';
export const TEMPLATE_VM_DOMAIN_LABEL = 'kubevirt.io/domain';
export const TEMPLATE_VM_SIZE_LABEL = 'kubevirt.io/size';
export const TEMPLATE_VM_COMMON_NAMESPACE = 'openshift';
export const TEMPLATE_PROVIDER_ANNOTATION = 'template.kubevirt.io/provider';
export const TEMPLATE_PROVIDER_URL = 'template.kubevirt.io/provider-url';
export const TEMPLATE_SUPPORT_LEVEL = 'template.kubevirt.io/provider-support-level';
export const TEMPLATE_PARENT_PROVIDER_ANNOTATION = 'template.kubevirt.ui/parent-provider';
export const TEMPLATE_PARENT_SUPPORT_LEVEL = 'template.kubevirt.ui/parent-support-level';
export const TEMPLATE_PARENT_PROVIDER_URL = 'template.kubevirt.ui/parent-provider-url';
export const TEMPLATE_DEPRECATED_ANNOTATION = 'template.kubevirt.io/deprecated';

export const LABEL_USED_TEMPLATE_NAME = 'vm.kubevirt.io/template';
export const LABEL_USED_TEMPLATE_NAMESPACE = 'vm.kubevirt.io/template.namespace';

export const DEFAULT_RDP_PORT = 3389;

export const VM_DETAIL_DETAILS_HREF = 'details';
export const VM_DETAIL_DISKS_HREF = 'disks';
export const VM_DETAIL_NETWORKS_HREF = 'nics';
export const VM_DETAIL_CONSOLES_HREF = 'console';
export const VM_DETAIL_ENVIRONMENT = 'environment';
export const VM_DETAIL_SNAPSHOTS = 'snapshots';

export const CLOUDINIT_DISK = 'cloudinitdisk';

export const OS_WINDOWS_PREFIX = 'win';

export enum DeviceType {
  NIC = 'NIC',
  DISK = 'DISK',
}

export const VM_DETAIL_EVENTS_HREF = 'events';

export const DUMMY_VM_NAME = 'vm';

export const WINTOOLS_CONTAINER_NAMES = {
  openshift: 'registry.redhat.io/container-native-virtualization/virtio-win',
  ocp: 'registry.redhat.io/container-native-virtualization/virtio-win',
  online: 'registry.redhat.io/container-native-virtualization/virtio-win',
  dedicated: 'registry.redhat.io/container-native-virtualization/virtio-win',
  azure: 'registry.redhat.io/container-native-virtualization/virtio-win',
  okd: 'kubevirt/virtio-container-disk',
};

export const PENDING_RESTART_LABEL = '(pending restart)';
export const getPVCUploadURL = (pvcNamespace: string): string =>
  `/k8s/ns/${pvcNamespace}/persistentvolumeclaims/~new/upload-form`;

export const ROOT_DISK_NAME = 'rootdisk';
export const ROOT_DISK_INSTALL_NAME = 'rootdisk-install';

export const TEMPLATE_PIN = 'kubevirt.templates.pins';
export const TEMPLATE_PIN_PROMOTED = 'kubevirt.templates.pins.promoted';
export const TEMPLATE_WARN_SUPPORT = 'kubevirt.templates.warnSupport';
