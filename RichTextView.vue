<template>
  <div>
    <editor id="tinymceEditor" :init="tinymceInit" v-model="item.content" :key="tinymceFlag">
    </editor>
    <!-- <el-upload class="avatar-uploader"
      ref="imageUpload"
      action="http://222.66.127.246:8020/attach/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
    <input type="file" name="" @change="handlerImgUploadChange" style="display:none;" id="imgupload">
  </div>
</template>
<script>
import { fetch } from '@/utils'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'

import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/fullscreen'
export default {
  name: 'RichTextView',
  components: {
    'editor': Editor
  },
  data() {
    return {
      tinymceFlag: 1,
      tinymceInit: {},
      content: this.value,
      imageUrl: ''
    }
  },
  props: {
    value: {
      type: String
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    value(val) {
      this.content = val
    }
  },
  methods: {
    jndjcknzkj() {
      console.log('11111')
    },
    imgUpload (file) {
      let formdata = new FormData()
      formdata.append('file', file)
      fetch({
        url: 'http://222.66.127.246:8020/attach/upload',
        method: 'POST',
        headers: {
          'content-type': 'mutipart/form-data'
        },
        data: formdata
      }).then(res => {
        console.log(res)
        let host = 'http://222.66.127.246:8021'
        this.handleAvatarSuccess(host + res.downloadUrl)
      })
    },
    handlerImgUploadChange () {
      let file = document.querySelector('#imgupload').files[0]
      this.imgUpload(file)
    },
    // 插入图片至编辑器
    handleAvatarSuccess (path) {
      tinymce.execCommand('mceInsertContent', false, `<img src=${path}>`)
    },
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw)
    //   this.appHttpModel.imagePath = {changingThisBreaksApplicationSecurity: this.imageUrl}
    //   this.appHttpModel.previewimage = {
    //     id: res.id,
    //     name: res.newName,
    //     fileid: res.id,
    //     location: '/var/www/erp/fileStore/portal/image/2019/' + res.id + '.jpg',
    //     url: '/portalimage/2019/' + res.id + '.jpg'
    //   }
    //   this.appHttpModel.image = res.id
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  created () {
    this.tinymceInit = {
      placeholder: '您想说点什么？',
      skin_url: '/static/skins/ui/oxide',
      language_url: `/static/langs/zh_CN.js`,
      language: 'zh_CN',
      height: document.body.offsetHeight - 300,
      browser_spellcheck: true, // 拼写检查
      branding: false, // 去水印
      // elementpath: false,  // 禁用编辑器底部的状态栏
      statusbar: false, // 隐藏编辑器底部的状态栏
      paste_data_images: true, // 允许粘贴图像
      menubar: false, // 隐藏最上方menu
      plugins: 'advlist table lists paste preview fullscreen',
      toolbar: 'fontselect fontsizeselect forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | imageUpload quicklink h2 h3 blockquote table numlist bullist preview fullscreen',
      setup: (editor) => {
        editor.ui.registry.addButton('imageUpload', {
          // text: '插入图片',
          tooltip: '插入图片',
          icon: 'image',
          onAction: () => {
            setTimeout(() => {
              document.querySelector('#imgupload').click()
            }, 0)
          }
        })
      },
      images_upload_url: 'http://222.66.127.246:8020/attach/upload'
    }
  }
}
</script>

<style type="text/scss" lang="scss">
</style>
