<template>
  <div id = 'pinned'>
      <!-- {{post}} -->
      <span id = 'pinnedTitle'> <!--@click = '$router.push(`/post/${post.key}`)'-->
          {{title}}
      </span>
      <div id = 'pinnedContents'>
          {{description}}
      </div>
      <div id = 'pinnedInfo' ><!--@click = '$router.push(`/project/${post.package.key}`)'-->
          <!-- <div class = 'pinnedPPostPackageCircle' :style = "{ backgroundColor : post.package.color}"></div> -->
          <!-- {{post.package.name}} -->
      </div>
    </div>
</template>

<script>
export default {
    props : {
        title : {
            type : String
        },
        description : {
            type : String
        }

    },
}
</script>

<style>
    #pinned{
        border: 1px solid #D0D7DE;
        border-radius: 6px;
        /* width: 440px; */
        /* height: 118px; */
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    #pinnedTitle{
        font-size: 16px;
        color: #0969da;
        font-weight: 600;
    }
    #pinnedTitle:hover{
        text-decoration-line:underline;
        text-underline-position: under;
        cursor: pointer;
    }
    #pinnedContents{
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 16px;
    }
    #pinnedInfo{
        font-size: 12px;
        display: flex;
        align-items: center;
    }
    #pinnedInfo:hover{
        text-decoration-line:underline;
        text-underline-position: under;
        cursor: pointer;
    }
    .pinnedPPostPackageCircle{
        border-radius: 100%;
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }
</style>