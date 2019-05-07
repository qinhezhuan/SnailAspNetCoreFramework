﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Utility.Page;
using WebApp.DTO.Sample;

namespace WebApp.Controllers.Example
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {

        /// <summary>
        /// 查询 
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public List<StudentResultDto> Query(StudentQueryDto query)
        {
            return null;
        }

        /// <summary>
        /// 分页查询 
        /// </summary>
        /// <returns></returns>
        public PageResult<StudentResultDto> QueryPage(StudentQueryPageDto queryPage)
        {
            return null;
        }
    }


   
}