﻿using Snail.Core.Dto;
using Snail.Core.Entity;

namespace ApplicationCore.Dtos
{
    public class BaseIdDto : IIdField<string>, IDto
    {
        public string Id { get; set; }
    }
}
